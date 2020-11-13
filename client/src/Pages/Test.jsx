import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ExpansionPanel } from '@material-ui/core'
import { ExpansionPanelSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelDetails } from '@material-ui/core'
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { Modal } from '@material-ui/core'
import ServerMessage from '../components/common/ServerMessages/ServerMessage';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function rand() {
        return Math.round(Math.random() * 20) - 10;
}
const useStyles = makeStyles((theme) => ({
        root: {
                flexGrow: 1,
                width: '100%',
                backgroundColor: theme.palette.background.paper,
        },
        panelDetails: {
                height: 150,
                overflow: 'auto',
                overflowWrap: 'wrap',
                paddingLeft: 10,
                paddingRight: 10


        },
        wrapper: {
                margin: theme.spacing(1),
                position: 'relative',
        },
        buttonSuccess: {
                backgroundColor: green[500],
                '&:hover': {
                        backgroundColor: green[700],
                },
        },
        fabProgress: {
                color: green[500],
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
        },
        buttonProgress: {
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: -12,
                marginLeft: -12,
        },
}));



function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
                <div
                        role="tabpanel"
                        hidden={value !== index}
                        id={`scrollable-force-tabpanel-${index}`}
                        aria-labelledby={`scrollable-force-tab-${index}`}
                        {...other}
                >
                        {value === index && (
                                <Box p={3}>
                                        <Typography>{children}</Typography>
                                </Box>
                        )}
                </div>
        );
}

function a11yProps(index) {
        return {
                id: `scrollable-force-tab-${index}`,
                'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
}
const TestBlock = () => <div>ADSASDASD</div>
function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-${top}%, -${left}%)`,
        };
}
function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Test() {
        const classes = useStyles();
        const [loading, setLoading] = React.useState(false);
        const [success, setSuccess] = React.useState(false);
        const timer = React.useRef();
        const [modalStyle] = React.useState(getModalStyle);
        const buttonClassname = clsx({
                [classes.buttonSuccess]: success,
        });
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };
        React.useEffect(() => {
                return () => {
                        clearTimeout(timer.current);
                };
        }, []);

        const handleButtonClick = () => {
                if (!loading) {
                        setSuccess(false);
                        setLoading(true);
                        timer.current = window.setTimeout(() => {
                                setSuccess(true);
                                setLoading(false);
                        }, 2000);
                }
        };

        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
                setValue(newValue);
        };
        const [panels] = React.useState([
                {
                        title: 'First Panel Title',
                        content: 'In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdumin turpis vel tempor. Vivamus tincidunt turpis vitae portadignissim. Quisque condimentum augue arcu, quis tincidunt eratluctus sit amet. Sed quis ligula malesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdaslesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdasvlesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdaslesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdaslesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdaslesuada, sollicitudin nislasdasdasdasdasdasdasdasdasdasdasdasdasdasdddddaasdasdasdaslesuada, sollicitudin ',
                        icon: <PhoneIcon color="secondary" />
                },
                {
                        title: 'Second Panel Title',
                        content: 'Second panel content...',
                        icon: <FavoriteIcon color="secondary" />
                },
                {
                        title: 'Third Panel Title',
                        content: 'Third panel content...',
                        icon: <HelpIcon color="secondary" />
                },
                {
                        title: 'Fourth Panel Title',
                        content: 'Fourth panel content...',
                        icon: <ShoppingBasket color="secondary" />
                }
        ]);
        const body = (
                <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </p>
                        <TestBlock />
                </div>
        );

        return (
                <div className={classes.root}>
                        <AppBar position="static" color="default">
                                <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons="on"
                                        indicatorColor="primary"
                                        textColor="primary"
                                        aria-label="scrollable force tabs example"
                                >
                                        <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
                                        <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
                                        <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
                                        <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
                                        <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
                                        <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
                                        <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
                                </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                                Item One
      </TabPanel>
                        <TabPanel value={value} index={1}>
                                Item Two
      </TabPanel>
                        <TabPanel value={value} index={2}>
                                Item Three
      </TabPanel>
                        <TabPanel value={value} index={3}>
                                Item Four
      </TabPanel>
                        <TabPanel value={value} index={4}>
                                Item Five
      </TabPanel>
                        <TabPanel value={value} index={5}>
                                Item Six
      </TabPanel>
                        <TabPanel value={value} index={6}>
                                Item Seven
      </TabPanel>

                        <div className={classes.root}>
                                {panels
                                        .filter(panel => !panel.hidden)
                                        .map((panel) => (
                                                <ExpansionPanel>
                                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                                {panel.icon}
                                                                <Typography variant="h6" color="primary">{panel.title}</Typography>
                                                        </ExpansionPanelSummary>
                                                        <ExpansionPanelDetails className={classes.panelDetails}>
                                                                <Typography paragraph>{panel.content}</Typography>
                                                        </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                        ))}
                        </div>
                        <div className={classes.root}>
                                <div className={classes.wrapper}>
                                        <Fab
                                                aria-label="save"
                                                color="primary"
                                                className={buttonClassname}
                                                onClick={handleButtonClick}
                                        >
                                                {success ? <CheckIcon /> : <SaveIcon />}
                                        </Fab>
                                        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                                </div>
                                <div className={classes.wrapper}>
                                        <Button
                                                variant="contained"
                                                color="primary"
                                                className={buttonClassname}
                                                disabled={loading}
                                                onClick={handleButtonClick}
                                        >
                                                Accept terms
        </Button>
                                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>
                        </div>
                        <button type="button" onClick={handleOpen}>
                                Open Modal
      </button>
                        <Modal

                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                        >
                                {body}
                        </Modal>

                        <ServerMessage message="ErrrorErrrorErrrorErrrorErrrorErrrorErrrorErrrorErrrorErrrorErrrorErrror" />

                        <Snackbar open={true} autoHideDuration={6000} >
                                <Alert severity="success">
                                        This is a success message!
             </Alert>
                        </Snackbar>
                </div>


        );
}

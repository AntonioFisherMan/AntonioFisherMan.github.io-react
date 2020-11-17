import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MyButton from '../../components/SiteButton/MyButton/MyButton';



const styles = theme => ({
        card: {
                maxWidth: 400
        }
});
const InformCard = withStyles(styles)(({ classes, inform, changeLayout }) => {
        return (
                <>
                        {inform ? <Card className={classes.card}>
                                <CardHeader
                                        title={inform.name, ' ', inform.surname}
                                        subheader={inform.phone}
                                        avatar={
                                                <Avatar>
                                                        {inform.userImage ? <img style={{ width: '100px', height: '100px', margin: '0 auto' }} src={`http://localhost:5000/${inform.userImage}`} /> : <PersonIcon />}
                                                </Avatar>
                                        }
                                />
                                <CardContent>

                                        <Typography variant="subtitle">{ }</Typography>
                                        <Typography variant="caption">
                                                {inform.name}
                                        </Typography>
                                </CardContent>
                                <CardActions disableActionSpacing>
                                        <IconButton>
                                                <ContactMailIcon />
                                        </IconButton>
                                        <IconButton onClick={() => changeLayout()}>
                                                <MyButton text="Change Inform" variant="text" href="" color="primary" />
                                        </IconButton>
                                </CardActions>
                        </Card>
                                : null}
                </>

        )
})
// city: "Полтава"
// code: "36001"
// country: "Ukraine"
// post: "5"

export default InformCard
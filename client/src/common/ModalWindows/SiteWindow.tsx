import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Box, IconButton, Typography } from '@material-ui/core';
import { H4 } from '../Typography/H4';
import { H6 } from '../Typography/H6';
import { MyCloseIcon } from '../../assets/icons/icons';
import { PinkText } from '../Typography/PinkText';



function getModalStyle() {
        const top = 50;
        const left = 50;
        return {
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-${top}%, -${left}%)`,
        };
}

const useStyles = makeStyles((theme: Theme) =>
        createStyles({
                modal: {
                        position: 'absolute',
                        display: 'flex',
                        width: 785,
                        background: 'white',
                        height: 487,
                        paddingLeft: 25,
                        paddingRight: 15,
                        paddingTop: 15
                },
                box: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: 20
                },
                img: {

                },
                headline: {
                        fontWeight: 300,
                        fontSize: 50,
                        color: '#111111'
                },
                textBlock: {
                        marginTop: 25,
                        marginBottom: 48,
                },
                text: {
                        fontWeight: 'normal',
                        fontSize: 17,
                        color: '#000000',
                        lineHeight: '200%'
                },
                h6: {
                        fontWeight: 600,
                        fontSize: 15,
                        lineHeight: '200%',
                        color: '#000000'
                },
                icon: {
                        position: 'absolute',
                        right: 12,
                        top: 15,

                },
                '@media (max-width: 820px)': {
                        modal: {

                                width: 600,

                        },
                        headline: {

                                fontSize: 40,

                        },
                },
                '@media (max-width: 650px)': {
                        modal: {
                                flexDirection: 'column',
                                width: 400,
                                height: '100%'
                        },
                        headline: {
                                fontSize: 17,
                        },
                        textBlock: {
                                marginTop: 15,
                                marginBottom: 18,
                        },
                        img: {
                                width: 100,
                                height: 150,
                                margin: '0 auto',
                                marginBottom: 10
                        },
                        text: {
                                fontSize: 15
                        },
                        box: {
                                marginLeft: 0
                        }

                },
                '@media (max-width: 400px)': {
                        modal: {
                                flexDirection: 'column',
                                width: 320,
                                height: '100%'
                        },
                        headline: {
                                fontSize: 30,
                                textAlign: 'center'
                        },
                        box: {
                                textAlign: 'center'
                        }

                },
        }),
);

export const SiteWindow = () => {
        const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);
        React.useEffect(() => {
                handleOpen()
        }, [])
        const handleOpen = () => {
                setTimeout(() => {
                        setOpen(true);
                }, 10000);
        };

        const handleClose = () => {
                setOpen(false);
        };

        return (
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                >
                        <Box style={modalStyle} className={classes.modal}>
                                <img src="/images/girl.png" alt="" className={classes.img} />
                                <Box className={classes.box}>
                                        <H4 text="We’ve got you covered, girl!" propsClasses={classes.headline} align="left" />
                                        <Box className={classes.textBlock}>
                                                <Typography className={classes.text}>Can one dress be enough? We don’t think so!</Typography>
                                                <Typography className={classes.text}>Rent <PinkText text="3rd " />outfit and keep all 3 outfits for <PinkText text="14 days!" /></Typography>
                                                <Typography className={classes.text}>Rent <PinkText text="3rd " />outfit and keep all 3 outfits for <PinkText text="21 days!" /></Typography>
                                        </Box>

                                        <H6 text="P.S. Great idea for vacay or an eventful month, Isn’t it?" propsClasses={classes.h6} />

                                </Box>
                                <IconButton className={classes.icon} onClick={() => handleClose()}>
                                        <MyCloseIcon />
                                </IconButton>

                        </Box>
                </Modal>
        );
}

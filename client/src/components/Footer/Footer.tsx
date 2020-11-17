import React from 'react'
import { styles } from './styles'
import { ReduxFormEmailSent } from '../../redux/reduxForms/ReduxEmailSendForm'
import { PinkText } from '../common/elements/PinkText'
import { Box, Container, Divider, Grid, ThemeProvider, Typography, withStyles, WithStyles } from '@material-ui/core'
import { Subtitle1 } from '../Typography/Subtitle1'
import Link from '@material-ui/core/Link';
import clsx from 'clsx'
type Props = {
    subscribeNewUser: (email: string) => void,

}

const MyLink = withStyles(styles)(({ href, text, classes }: PropsLink) => {
    return (
        <Link href={href} className={classes.link}>{text} </Link>
    )
})

const Footer: React.FC<WithStyles<typeof styles> & Props> = ({ classes, subscribeNewUser }) => {
    const onSubmit = (formData: any) => {
        subscribeNewUser(formData.submitEmail)
    }
    return (
        <>
            <footer className="footer">
                <Container>
                    <Divider />
                    <Grid container >
                        <Grid item md={1}></Grid>
                        <Grid item xs={12} sm={6} md={2} >
                            <Box className={classes.footerItem}>

                                <Subtitle1 text="Help" classes={classes.headline} />
                                <MyLink text="How it Works" href="#" />
                                <MyLink text="FAQs" href="#" />
                                <MyLink text="Size Charts" href="#" />



                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box className={classes.footerItem}>
                                <Subtitle1 text="About Us" classes={classes.headline} />
                                <MyLink text="About Dress IT Box" href="#" />
                                <MyLink text="Privacy & Cookie Policy" href="#" />
                                <MyLink text="Terms & Conditions" href="#" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <Box className={classes.footerItem}>
                                <Subtitle1 text="Quick Links" classes={classes.headline} />
                                <MyLink text="Blog" href="#" />
                                <MyLink text="Refer a friend" href="#" />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box className={classes.footerItem}>
                                <Typography className={classes.headlinePink} variant="subtitle1" >
                                    Subscribe and <PinkText text="get 10% off" /> your first rental
                                </Typography>
                                <ReduxFormEmailSent onSubmit={onSubmit} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Box className={classes.footerBottom}>
                    <Container>
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item><Typography className={classes.link}>© 2020 dressitbox.com</Typography></Grid>
                        </Grid>
                    </Container>

                </Box>

            </footer>
        </>

    )
}

type PropsLink = {
    href: string,
    text: string,
    classes: {
        link: string;
    };
}

export default withStyles(styles)(Footer)

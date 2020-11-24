import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { CardMedia } from '@material-ui/core'
import { PinkText } from '../../common/Typography/PinkText'
import Prelaoder from '../../common/Preloader'
import { SiteMessage } from '../../common/Messages/SiteMessage'

const styles = theme => ({
        card: {
                width: '100%'
        },
        media: {
                height: 0,
                paddingTop: '46.25%', // 16:9
        },
})
const InformCard = withStyles(styles)(({ classes, inform, changeLayout, loading }) => {

        let fullName
        if (inform) {
                fullName = `${inform.name} ${inform.surname}`
        }
        return (

                <>
                        {loading ? <Prelaoder loading={loading} /> :
                                <>

                                        {inform ? <Card className={classes.card}>
                                                <CardHeader
                                                        title={fullName}
                                                        subheader={inform.phone}
                                                        avatar={

                                                                <>
                                                                        {inform.userImage ? null : <Avatar>
                                                                                <PersonIcon />
                                                                        </Avatar>}
                                                                </>



                                                        }
                                                />
                                                {inform.userImage ? <CardMedia
                                                        className={classes.media}
                                                        image={`http://localhost:5001/${inform.userImage}`}
                                                        title="Paella dish"
                                                /> : null}

                                                <CardContent>

                                                        <Typography variant="subtitle1">City:  <PinkText text={inform.city} /></Typography>
                                                        <Typography variant="subtitle1">Post:  <PinkText text={inform.post} /></Typography>
                                                        <Typography variant="subtitle1">Country:  <PinkText text={inform.country} /></Typography>
                                                        <Typography variant="subtitle1">Code:  <PinkText text={inform.code} /></Typography>

                                                </CardContent>
                                                <CardActions disableActionSpacing>
                                                        <IconButton>
                                                                <ContactMailIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => changeLayout(false)}>
                                                                <MyButton text="Change Inform" variant="text" href="" color="primary" />
                                                        </IconButton>
                                                </CardActions>
                                        </Card>
                                                : <Grid container justify="center" direction="column"> <SiteMessage text="Вы не заполнили свою информацию" />
                                                        <IconButton onClick={() => changeLayout(false)} >
                                                                <MyButton text="Change Inform" variant="text" href="" color="primary" size="large" />
                                                        </IconButton></Grid>}
                                </>}
                </>

        )
})


export default InformCard
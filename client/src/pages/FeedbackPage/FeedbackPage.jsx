import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import MyRating from '../../components/Rating/MyRating'
import { SiteMessage } from '../../common/Messages/SiteMessage'
import { ReduxFeedbackForm } from '../../redux/reduxForms/ReduxFeedbackForm'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { styles } from './styles'
import { Grid, Box, Container, withStyles, Hidden } from '@material-ui/core'
import { InformItem } from '../../components/InformItem/InformItem'
import GreyText from '../../common/Typography/GreyText'
import { MobileVersion } from './MobileVersion'
import { MyCloseIcon } from '../../assets/icons/icons'


const FeedbackPage = (props) => {
    const { classes } = props
    debugger
    return (
        <>
            <HeaderBottom />
            <section className={classes.feedbackBlock}>
                <Container >
                    <Grid container >
                        <SiteHeadline text="Profile" />
                    </Grid>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} md={3} container direction="column" justify="space-between" >
                            <Sidebar />
                        </Grid>

                        {props.review.length > 0 ? <>
                            <Hidden xsDown>
                                <Grid item md={9} className={classes.feedbackList}>
                                    <Box className={classes.linksBlock}>
                                        <Grid container >
                                            <Grid item sm={2} >
                                            </Grid>
                                            <Grid item container sm={5} >
                                                <Subtitle1 text="Item" />
                                            </Grid>
                                            <Grid item container sm={5} >
                                                <Subtitle1 text="Rate" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {props.review.map(review => <Box className={classes.feedbackItem}>
                                        <Grid container>
                                            <Grid item sm={2}>
                                                <img className={classes.feedbackItemImg} src={review.photos ? review.photos.middle : review.photo} alt="" />
                                            </Grid>
                                            <Grid item sm={5} >
                                                <InformItem
                                                    style={review.style}
                                                    size={review.size}
                                                    text="A perfect flirty number for Balls and Black Tie"
                                                    startDate={review.startDate}
                                                    endDate={review.endDate}
                                                />
                                                <Box className={classes.textBox}>
                                                    <Subtitle1 text="Show others how this outfit looks on you!" />
                                                    <Subtitle1 text="Upload pictures here" propsClasses={classes.text} />
                                                </Box>

                                            </Grid>
                                            <Grid item container sm={5} direction="column" justify="space-between">
                                                <Box className={classes.feedbackItemColumn2}>

                                                    <MyRating defaultValue={0} handleRating={props.handleRating} />
                                                    <GreyText text="Rate your rented outfit." />
                                                    <GreyText text="Let others know what you think!" />
                                                </Box>
                                                <Subtitle1 text="Review" propsClasses={classes.text} />
                                            </Grid>
                                            <MyCloseIcon onClick={() => { props.removeItem() }} className={classes.closeIcon} />
                                        </Grid>
                                        <Grid container>
                                            <ReduxFeedbackForm onSubmit={props.onSubmit} loading={props.loading} onSaveFiles={props.onSaveFiles} />
                                        </Grid>
                                    </Box>)}
                                </Grid>
                            </Hidden>
                            <Hidden smUp>
                                {props.review.map(item =>
                                    <MobileVersion removeItem={props.removeItem} classes={classes} item={props.review.length > 0 ? props.review[0] : item} handleRating={props.handleRating} />
                                )}
                                <Grid container>
                                    <ReduxFeedbackForm onSubmit={props.onSubmit} loading={props.loading} onSaveFiles={props.onSaveFiles} />
                                </Grid>
                            </Hidden>
                        </>
                            : <Grid container md={4} alignItems="center">
                                <SiteMessage text="Выберите товар для отзыва в вашых заказах или каталоге" />
                            </Grid>}

                    </Grid>

                </Container>









            </section>
        </>
    )
}




export default withStyles(styles)(FeedbackPage)

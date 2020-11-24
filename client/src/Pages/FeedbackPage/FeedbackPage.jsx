import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import MyRating from '../../components/Rating/MyRating'
import { SiteMessage } from '../../common/Messages/SiteMessage'
import { ReduxFeedbackForm } from '../../redux/reduxForms/ReduxFeedbackForm'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { styles } from './styles'
import { Grid, Box, Container, withStyles } from '@material-ui/core'
import { InformCard } from '../../components/InformCard/InformCard'
import GreyText from '../../common/Typography/GreyText'


const FeedbackPage = (props) => {
    const { classes } = props

    return (
        <div>
            <HeaderBottom />
            <section className={classes.feedbackBlock}>
                <Container >
                    <Grid container >
                        <SiteHeadline text="Profile" />
                    </Grid>
                    <Grid container spacing={3} direction="row">
                        <Grid item container xs={12} md={2}>
                            <Sidebar />
                        </Grid>
                        {props.review.length > 0 ?
                            <Grid item md={10} className={classes.feedbackList}>
                                <Box className={classes.linksBlock}>
                                    <Grid container >
                                        <Grid item md={2} >
                                        </Grid>
                                        <Grid item container md={5} >
                                            <Subtitle1 text="Item" />
                                        </Grid>
                                        <Grid item container md={5} >
                                            <Subtitle1 text="Rate" />
                                        </Grid>
                                    </Grid>
                                </Box>
                                {props.review.map(review => <Box className={classes.feedbackItem}>
                                    <Grid container>
                                        <Grid item md={2}>
                                            <img className={classes.feedbackItemImg} src={review.photos ? review.photos.middle : review.photo} alt="" />
                                        </Grid>
                                        <Grid item md={5} >
                                            <InformCard
                                                style={review.style}
                                                size={review.size}
                                                text="A perfect flirty number for Balls and Black Tie"
                                                startDate={review.startDate}
                                                endDate={review.endDate}
                                            />
                                            <Box className={classes.textBox}>
                                                <Subtitle1 text="Show others how this outfit looks on you!" />
                                                <Subtitle1 text="Upload pictures here" />
                                            </Box>

                                        </Grid>
                                        <Grid item md={5} >
                                            <Box className={classes.feedbackItemColumn2}>
                                                <img onClick={() => { props.removeItem() }} src="/images/svg/Vector (14).svg" alt="" className="ml-auto" />
                                                <MyRating defaultValue={0} handleRating={props.handleRating} />
                                                <GreyText text="Rate your rented outfit." />
                                                <GreyText text="Let others know what you think!" />
                                            </Box>
                                            <Subtitle1 text="Review" propsClasses={classes.text} />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <ReduxFeedbackForm onSubmit={props.onSubmit} loading={props.loading} onSaveFiles={props.onSaveFiles} />
                                    </Grid>
                                </Box>)}

                            </Grid>

                            : <Grid container md={4} alignItems="center">
                                <SiteMessage text="Выберите товар для отзыва в вашых заказах или каталоге" />
                            </Grid>}

                    </Grid>

                </Container>








                <div className={classes.feedbackListActive} >
                    <div className="col-3 returnItem-active">
                        <p style={{ minHeight: '250px' }}>Item</p>
                        <p style={{ minHeight: '150px ' }}>Rate</p>

                    </div>
                    <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                        <div className="d-flex" style={{ minHeight: '250px !important' }}>
                            <div>
                                <img src="images/Mask-4.png" alt="" />
                            </div>
                            <div>
                                <p >maxi DRESS</p>
                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                <div className=" d-flex">
                                    <p>Size: XS</p>
                                    <img src="images/svg/Vector (11).svg" alt="" />
                                </div>
                                <p>Rental period* : 7 days</p>
                                <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                            </div>

                        </div>

                        <div className="feedbackItemColumn2" style={{ minHeight: '250px !important', display: 'flex', justifyVontent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <MyRating />
                            <div>
                                <p className="feedbackItemGrey">Rate your rented outfit.<br />
                                            Let others know what you think!</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.feedbackItemActive}>
                    <div className="col-12">
                        <form action="" style={{ marginTop: '20px' }}>
                            <p style={{ textAlign: 'center' }}>Review</p>
                            <p className="feedbackItemText">Show others how this outfit looks on you!
                                            <br />
                                            Upload pictures here</p>

                            <div className="form-group">
                                <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div className="col-12 d-flex align-items flex-column">
                        <ReduxFeedbackForm onSubmit={props.onSubmit} />
                    </div>
                    <div>

                    </div>
                </div>


            </section>
        </div>
    )
}




export default withStyles(styles)(FeedbackPage)

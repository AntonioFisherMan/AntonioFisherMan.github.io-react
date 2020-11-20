import React from 'react'
import './ReturnPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { PinkText } from '../../components/common/elements/PinkText'
import { InformCard } from '../../components/InformCard/InformCard'
import { Grid, Container, withStyles, Box } from '@material-ui/core'
import { styles } from './styles'
import { Subtitle1 } from '../../components/Typography/Subtitle1'


const ReturnPage = (props) => {
    const { classes } = props
    return (
        <div>
            <HeaderBottom />

            <section className={classes.returnBlock}>
                <Container>
                    <Grid container className={classes.headline}>
                        <SiteHeadline text="My return" />
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={12} md={2}>
                            <Sidebar />
                        </Grid>
                        <Grid container md={10}>
                            <Container>
                                <Grid container>
                                    <Box className={classes.returnText}>
                                        <PinkText text="Return is included in your order!" />
                                        <Subtitle1 text="  In your box you will find a pre-payed return label that you need to place on
                                        your box
                                        and drop off at the nearest post office."/>
                                    </Box>
                                </Grid>

                                <Grid container className={classes.returnLinks}>

                                    <Grid item md={6}>
                                        <Subtitle1 text="Item" />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Subtitle1 text="Order NO." />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Subtitle1 text="Returns NO." />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Subtitle1 text="Status" />
                                    </Grid>

                                </Grid>


                                <Grid container className={classes.returnItem} >
                                    <Grid item md={6}>
                                        <InformCard text="A perfect flirty number for Balls and Black Tie"
                                            style="maxi DRESS"
                                            size="XS"
                                            startDate="Mar 17, 2020 "
                                            endDate=" Mar 24, 2020"
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Subtitle1 text="4146567738" />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Subtitle1 text="9tmlAIDfmx8B" />
                                    </Grid>
                                    <Grid item md={2}>
                                        <Box className={classes.returnItemColumn}>
                                            <img src="images/svg/Vector (24).svg" alt="" />
                                            <Subtitle1 text="Return received on Mar 17, 2020" />
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Container>



                        </Grid>
                    </Grid>
                    <Grid container>
                        <MyButton href="/catalog" text="Return to catalogue" variant="text" size="large" />

                    </Grid>
                </Container>





            </section>
        </div >
    )
}

export default compose(WithAuthRedirect, withStyles(styles))(ReturnPage)


// <div className="row">
//                             <div className="col-3 returnItem-active">
//                                 <p>Item</p>
//                                 <p>Order NO.</p>
//                                 <p>Returns NO.</p>
//                                 <p>Status</p>
//                             </div>
//                             <div className="col-9 col-lg-4 returnInform-active">
//                                 <div className="returnInformItem-active">

//                                     <p className="bagCard__slogan">maxi DRESS</p>
//                                     <div className="bagCard__list">
//                                         <p>A perfect flirty number for Balls and Black Tie.</p>
//                                     </div>
//                                     <div className="bagCard__size d-flex">
//                                         <p>Size: XS</p>
//                                         <img src="images/svg/Vector (11).svg" alt="" />
//                                     </div>
//                                     <p className="bagCard__p">Rental period* : 7 days</p>
//                                     <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
//                                 </div>


//                                 <p>4146567738</p>


//                                 <p>9tmlAIDfmx8B</p>


//                                 <div className="returnItem-column">
//                                     <img src="images/svg/Vector (24).svg" alt="" />
//                                     <p>Return received on Mar 17, 2020</p>
//                                 </div>

//                             </div>
//                         </div>
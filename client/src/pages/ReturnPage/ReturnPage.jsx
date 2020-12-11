import React from 'react'
import './ReturnPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { PinkText } from '../../common/Typography/PinkText'
import { InformItem } from '../../components/InformItem/InformItem'
import { Grid, Container, withStyles, Box, Hidden } from '@material-ui/core'
import { styles } from './styles'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { MobileVersion } from './MobileVersion'


const ReturnPage = (props) => {
    const { classes } = props
    return (
        <div>
            <HeaderBottom />

            <section className={classes.returnBlock}>
                <Container>
                    <Grid container >
                        <SiteHeadline text="My return" />
                    </Grid>

                    <Grid container direction="row">
                        <Grid item xs={12} md={3}>
                            <Sidebar />
                        </Grid>
                        <Hidden xsDown>
                            <Grid container md={9}>
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

                                        <Grid item sm={4}>
                                            <Subtitle1 text="Item" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Subtitle1 text="Order NO." />
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Subtitle1 text="Returns NO." />
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Subtitle1 text="Status" />
                                        </Grid>

                                    </Grid>


                                    <Grid container className={classes.returnItem} >
                                        <Grid item sm={4}>
                                            <InformItem text="A perfect flirty number for Balls and Black Tie"
                                                fashion="maxi DRESS"
                                                size="XS"
                                                startDate="Mar 17, 2020 "
                                                endDate=" Mar 24, 2020"
                                            />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Subtitle1 text="4146567738" />
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Subtitle1 text="9tmlAIDfmx8B" />
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Box className={classes.returnItemColumn}>
                                                <img src="images/svg/Vector (24).svg" alt="" />
                                                <Subtitle1 text="Return received on Mar 17, 2020" />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Container>

                            </Grid>
                        </Hidden>
                        <Hidden smUp>
                            <Box className={classes.boxActive}>
                                <MobileVersion classes={classes} />
                            </Box>

                        </Hidden>
                    </Grid>

                </Container>





            </section>
        </div >
    )
}

export default compose(WithAuthRedirect, withStyles(styles))(ReturnPage)



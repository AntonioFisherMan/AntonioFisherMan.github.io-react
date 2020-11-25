import React from 'react'
import { withStyles, Container, Grid, Box, Hidden, Typography } from '@material-ui/core'

import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'

import { SiteMessage } from '../../common/Messages/SiteMessage'
import { styles } from './styles'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import GreyText from '../../common/Typography/GreyText'
import { H6 } from '../../common/Typography/H6'
import { InformCard } from '../../components/InformCard/InformCard'
import { MobileVersion } from './MobileVersion'
import { CardItemType } from '../../types/types'

const OrdersPage = (props: any) => {
    const { classes } = props
    return (
        <>
            <HeaderBottom />
            <Container>
                <Grid container >
                    <SiteHeadline text="Profile" />
                </Grid>
                <Grid container direction="row" >
                    <Grid item xs={12} md={3} container direction="column" justify="space-between" >
                        <Sidebar />
                    </Grid>
                    {props.orders.length ? <> <Hidden xsDown>
                        <Grid xs={12} md={9} item>
                            <Box className={classes.linkBlock}>
                                <Grid container>
                                    <Grid item sm={4}></Grid>
                                    <Grid item sm={4} >
                                        <Subtitle1 text="Item" />
                                    </Grid>
                                    <Grid item sm={2} className={classes.center}>
                                        <Subtitle1 text="Rental" />
                                    </Grid>
                                    <Grid item sm={2} className={classes.center}>
                                        <Subtitle1 text="Purchase" />
                                    </Grid>
                                </Grid >
                            </Box>
                            <Grid item>
                                <GreyText text={`Заказов: ${props.orders.length}`} />
                                {props.orders.map((order: any) => <Grid container key={order._id}>
                                    <H6 text={`Номер заказа:: ${order._id}`} />

                                    {order.items.map((item: any) => <> <Box className={classes.orders__item} key={item._id}>
                                        <Grid item sm={4}  >
                                            <img className={classes.orders__photo} src={item.photo} alt="" />
                                        </Grid>
                                        <Grid item sm={4} >
                                            <InformCard text={item.text} style={item.style} size={item.size} startDate={item.startDate} endDate={item.endDate} />
                                        </Grid>
                                        <Grid item sm={2} className={classes.center}>
                                            <Subtitle1 text={`€${item.price}`} />
                                        </Grid>
                                        <Grid item sm={2} className={classes.centerAlign}>
                                            <Subtitle1 text="12312312" />
                                            <Box onClick={() => props.setItemOfReview(item)} >  <MyButton text="Write a Review" href={`/feedback/${item._id}`} propsClasses={classes.item__btn} /></Box>
                                        </Grid>

                                    </Box>

                                    </>
                                    )}
                                </Grid>)}
                            </Grid>
                        </Grid>
                    </Hidden>
                        <Hidden smUp>

                            <GreyText text={`Заказов: ${props.orders.length}`} />
                            {props.orders.map((order: any) => <Grid container className={classes.orderActive}>
                                <H6 text={`Номер заказа:: ${order._id}`} />
                                {order.items.map((item: CardItemType) =>
                                    <MobileVersion item={item} setItemOfReview={props.setItemOfReview} classes={classes} />
                                )}
                            </Grid>)}


                        </Hidden>
                    </>
                        :
                        <Grid container direction="row" justify="center" xs={12}>
                            <SiteMessage text="У вас еще не было заказов" />
                        </Grid>}
                </Grid>
            </Container>


        </>
    )
}


export default withStyles(styles)(OrdersPage)







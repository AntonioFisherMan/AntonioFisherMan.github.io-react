import React from 'react'
import { withStyles, Container, Grid, Box } from '@material-ui/core'

import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { Link } from 'react-router-dom'
import { SiteMessage } from '../../common/Messages/SiteMessage'
import { styles } from './styles'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import GreyText from '../../common/Typography/GreyText'
import { PinkText } from '../../common/Typography/PinkText'
import { H6 } from '../../common/Typography/H6'
import { InformCard } from '../../components/InformCard/InformCard'

const OrdersPage = (props: any) => {
    const { classes } = props
    return (
        <>
            <HeaderBottom />
            <section className={classes.orders}>

                <Container>
                    <Grid container >
                        <SiteHeadline text="Profile" />
                    </Grid>
                    <Box className="d-flex">
                        <Grid item container xs={12} md={2} >
                            <Sidebar />
                        </Grid>
                        {props.orders.length ? <Box className={classes.ordersBlock}>

                            <Box className={classes.linkBlock}>
                                <Grid container>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={4} >
                                        <Subtitle1 text="Item" />
                                    </Grid>
                                    <Grid item xs={3} className={classes.center}>
                                        <Subtitle1 text="Rental" />
                                    </Grid>
                                    <Grid item xs={3} className={classes.center}>
                                        <Subtitle1 text="Purchase" />
                                    </Grid>
                                </Grid >
                            </Box>

                            <Grid container>
                                <GreyText text={`Заказов: ${props.orders.length}`} />
                                {props.orders.map((order: any) => <Grid container key={order._id}>
                                    <H6 text={`Номер заказа:: ${order._id}`} />

                                    {order.items.map((item: any) => <> <Box className={classes.orders__item} key={item._id}>
                                        <Grid item xs={2}  >
                                            <img className={classes.orders__photo} src={item.photo} alt="" />
                                        </Grid>
                                        <Grid item xs={4} >
                                            <InformCard text={item.text} style={item.style} size={item.size} startDate={item.startDate} endDate={item.endDate} />
                                        </Grid>
                                        <Grid item xs={3} className={classes.center}>
                                            <Subtitle1 text={`€${item.price}`} />
                                        </Grid>
                                        <Grid item xs={3} className={classes.centerAlign}>
                                            <Subtitle1 text="12312312" />
                                            <Box onClick={() => props.setItemOfReview(item)} >  <MyButton text="Write a Review" href={`/feedback/${item._id}`} /></Box>
                                        </Grid>

                                    </Box>

                                    </>
                                    )}
                                </Grid>)}
                            </Grid>
                        </Box> :
                            <Grid container direction="row" justify="center" xs={12}>
                                <SiteMessage text="У вас еще не было заказов" />
                            </Grid>}
                    </Box>
                </Container>
            </section>

        </>
    )
}


export default withStyles(styles)(OrdersPage)







{/* <div className={classes.orders__itemActive} >
<div className="col-3 returnBlock__item-active">
                        <p style={{ minHeight: '230px !important' }}>Item</p>
                        <p style={{ minHeight: '150px !important' }}>Rental</p>
                        <p style={{ minHeight: '100px !important' }}>Purchase</p>
</div>
                    <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                        <div className="d-flex" style={{ minHeight: '230px !important' }}>
                            <div>
                                <img className="orders__photo" src="images/Mask-4.png" alt="" />
                            </div>
                            <div>
                                <p className="bagCard__slogan">maxi DRESS</p>
                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                <div className="bagCard__size d-flex">
                                    <p>Size: XS</p>
                                    <img src="images/svg/Vector (11).svg" alt="" />
                                </div>
                                <p className="bagCard__p">Rental period* : 7 days</p>
                                <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                            </div>

                        </div>
                        <p className="bagCard__listPrice d-flex justify-content-center" style={{ minHeight: '150px !important', alignItems: 'center' }}>€61.17</p>

                        <div className="d-flex  flex-column align-items-center">
                            <p className="bagCard__listPrice " style={{ minHeight: '100px !important', display: 'flex', alignItems: 'center' }}>€61.17</p>
                            <button className="style__btn" style={{ margin: '0' }}>BUY</button>
                            <p style={{ textAlign: 'center', marginTop: '10px !important' }}>Buy that dress that you are renting at a reduced price</p>
                        </div>

                    </div>

</div> */}
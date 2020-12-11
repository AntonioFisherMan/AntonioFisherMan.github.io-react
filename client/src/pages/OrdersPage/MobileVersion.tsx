import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { InformItem } from '../../components/InformItem/InformItem'
import { CardItemType } from '../../types/types'
import MyButton from '../../components/SiteButton/MyButton/MyButton'

export const MobileVersion: React.FC<MobileVersionProps> = ({ item, setItemOfReview, classes }) => {
        return (
                <Grid container direction="row" className={classes.cardActiveItem}>
                        <Grid item className={classes.cardLinkActive} xs={3}>
                                <Subtitle1 text="Item" propsClasses={classes.p1} />
                                <Subtitle1 text="Rental" propsClasses={classes.p2} />
                                <Subtitle1 text="Purchase" propsClasses={classes.p3} />
                        </Grid>
                        <Grid item className={classes.cardActive} xs={9}>
                                <Box className={classes.cardActiveInform}>
                                        <Grid item xs={4} className={classes.cardPhotoActiveBlock}>
                                                <img className={classes.cardPhotoActive} src={item.photo} alt="" />
                                        </Grid>
                                        <Grid item xs={8}>
                                                <InformItem size={item.size} startDate={item.startDate} endDate={item.endDate} fashion={item.style} text={item.text} />
                                        </Grid>
                                </Box>
                                <Subtitle1 propsClasses={classes.p2} text={`€${item.price}`} />
                                <Box className={classes.p3} >
                                        <Subtitle1 text={item.quantity} />
                                        <Box onClick={() => setItemOfReview(item)} className={classes.item__btnBlock}>  <MyButton text="Write a Review" href={`/feedback/${item._id}`} propsClasses={classes.item__btn} /></Box>
                                </Box>
                        </Grid>

                </Grid >

        )
}
type MobileVersionProps = {
        item: CardItemType,
        setItemOfReview: (item: CardItemType) => void,
        classes: any
}

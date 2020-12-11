import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import { InformItem } from '../../components/InformItem/InformItem'
import { CardItemType } from '../../types/types'
import { MyCloseIcon } from '../../assets/icons/icons'
import MyRating from '../../components/Rating/MyRating'
import GreyText from '../../common/Typography/GreyText'


export const MobileVersion: React.FC<MobileVersionProps> = ({ item, removeItem, classes, handleRating }) => {
        return (
                <>
                        <Grid container direction="row" className={classes.cardActiveItem}>
                                <Grid item className={classes.cardLinkActive} xs={3}>
                                        <Subtitle1 text="Item" propsClasses={classes.p1} />
                                        <Subtitle1 text="Rate" propsClasses={classes.p2} />
                                </Grid>
                                <Grid item className={classes.cardActive} xs={9}>
                                        <MyCloseIcon onClick={() => { removeItem() }} className={classes.closeIcon} />
                                        <Box className={classes.cardActiveInform}>
                                                <Grid item xs={4} className={classes.cardPhotoActiveBlock}>
                                                        <img className={classes.cardPhotoActive} src={item.photo} alt="" />
                                                </Grid>
                                                <Grid item xs={8}>
                                                        <InformItem size={item.size} startDate={item.startDate} endDate={item.endDate} fashion={item.style} text={item.text} />
                                                </Grid>
                                        </Box>
                                        <Box className={classes.p2}>
                                                <MyRating defaultValue={0} handleRating={handleRating} />
                                                <GreyText text="Rate your rented outfit." />
                                                <GreyText text="Let others know what you think!" />
                                        </Box>
                                </Grid>
                        </Grid >

                </>


        )
}
type MobileVersionProps = {
        item: CardItemType,
        classes: any,
        removeItem: () => void,
        handleRating: () => void
}






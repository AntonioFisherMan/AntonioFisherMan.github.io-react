import React from 'react'
import { ReviewType } from '../../types/types'
import MyRating from '../Rating/MyRating'
import { H6 } from '../../common/Typography/H6'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import userPhoto from '../../assets/user.png'
import Avatar from '@material-ui/core/Avatar';
import { Box, Grid } from '@material-ui/core'
import { PinkText } from '../../common/Typography/PinkText'
import { H5 } from '../../common/Typography/H5'

type Props = {
        classes: any
}
export const ReviewItem: React.FC<ReviewType & Props> = ({ _id, userImage, rating, reviewText, name, classes }) => {
        return (

                <Grid container key={_id} className={classes.reviewItem}>
                        <Grid item md={1} ></Grid>
                        <Grid item md={2} >
                                <Box className={classes.reviewInform}>
                                        <Box className={classes.reviewImgBlock}>
                                                {userImage !== 'undefined'
                                                        ? <Avatar className={classes.reviewImg} src={`https://full-stack-shop.herokuapp.com//${userImage}`} />
                                                        : <Avatar className={classes.reviewImg} src={userPhoto} />}
                                        </Box>
                                        <Box className={classes.reviewInforDetails}>
                                                <H5 text={name} align="left" />
                                                <PinkText text="Luxemburg" variant="outlined" classes={classes.reviewPinkText} />
                                                <MyRating defaultValue={rating} readOnly={true} />
                                        </Box>
                                </Box>

                        </Grid>
                        <Grid item md={8} className={classes.reviewCard}>
                                <Box className={classes.reviewList}>
                                        <Grid item md={4}>
                                                <Subtitle1 text="Your height (in feet)?  5.7" />
                                        </Grid>
                                        <Grid item md={4}>
                                                <Subtitle1 text="About the fit True to size" />
                                        </Grid>
                                        <Grid item md={4}>
                                                <Subtitle1 text="About your curves  Curvey" />
                                        </Grid>
                                </Box>
                                <Box className={classes.reviewText}><H6 text="Wedding guest dress " /> <Subtitle1 text={reviewText} /></Box>
                        </Grid>

                </Grid >

        )
}

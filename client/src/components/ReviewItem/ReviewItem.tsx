import React from 'react'
import { ReviewType } from '../../types/types'
import MyRating from '../Rating/MyRating'
import { H5 } from '../Typography/H5'
import { Subtitle1 } from '../Typography/Subtitle1'
import userPhoto from '../../assets/user.png'
import Avatar from '@material-ui/core/Avatar';


export const ReviewItem: React.FC<ReviewType> = ({ _id, photo, rating, reviewText, name }) => {
        return (
                <div key={_id} className="reviewItem">
                        <div className="row">
                                <div className="col-12 col-sm-12  col-lg-3 ">
                                        <div className="reviewInform ">
                                                <div className="reviewImg">
                                                        <Avatar alt="Remy Sharp" src={photo !== "undefined" ? `http://localhost:5000/${photo}` : userPhoto} />

                                                </div>
                                                <div className="reviewText">
                                                        <h5>{name}</h5>
                                                        <MyRating defaultValue={rating} readOnly={true} />
                                                </div>
                                        </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-9">
                                        <div className="reviewCard">
                                                <ul className="reviewList">
                                                        <Subtitle1 text="Your height (in feet)?  5.7" />
                                                        <Subtitle1 text="About the fit True to size" />
                                                        <Subtitle1 text="About your curves  Curvey" />
                                                </ul>
                                                <H5 text="Wedding guest dress" align="left" />
                                                <Subtitle1 text={reviewText} />
                                        </div>
                                </div>

                        </div>
                        <hr />
                </div>
        )
}

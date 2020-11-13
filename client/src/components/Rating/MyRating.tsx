import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Rating } from '@material-ui/lab';
import { connect } from 'react-redux';
import { changeRating } from '../../redux/reducers/CatalogReducer'
import { useState, useEffect } from 'react';
import { MyStartIcon } from '../../assets/icons/icons';

type MyRating = {
        defaultValue: number,
        readOnly?: boolean
}
type Props = {
        goodsId: string
}
type Dispatch = {
        changeRating?: (rating: number | null, goodsId: string) => void
}
type RatingType = Dispatch & Props & MyRating

const MyRating: React.FC<any> = ({ changeRating, defaultValue, goodsId, readOnly }) => {

        return (
                <Rating
                        emptyIcon={<MyStartIcon filled={false} />}
                        icon={<MyStartIcon filled={true} />}
                        name="customized-empty"
                        onChange={(event, newValue) => {
                                changeRating(newValue, goodsId)
                        }}
                        defaultValue={defaultValue}
                        precision={1}
                />
        )
}

export default connect(null, { changeRating })(MyRating)


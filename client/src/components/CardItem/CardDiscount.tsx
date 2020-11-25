import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { MyAddIcon, MyCloseIcon } from '../../assets/icons/icons'
import GreyText from '../../common/Typography/GreyText'
import { PinkText } from '../../common/Typography/PinkText'

export const CardDiscount: React.FC<CardDiscount> = ({ isInsurance, classes, _id, addInsurance, removeInsurance }) => {
        return (
                <Box className={classes.cardDiscount}>
                        {!isInsurance ? <>
                                <Box >
                                        <MyAddIcon onClick={() => addInsurance(_id, isInsurance = true)} />
                                </Box>
                                <Box className={classes.cardDiscountText}>
                                        <Typography><PinkText text="Add" /> insurance for this item for €5</Typography>
                                        <GreyText text="This will cover accidental damage (example: zip break) but not unrepairable damage" />
                                </Box>


                        </> : <>
                                        <Box  >
                                                <MyCloseIcon onClick={() => { removeInsurance(_id, isInsurance = false) }} />
                                        </Box>
                                        <Box className={classes.cardDiscountText}>
                                                <Typography>This product has insurance <PinkText text="€5" /></Typography>
                                                <GreyText text="This will cover accidental damage (example: zip break) but not unrepairable damage" />
                                        </Box></>}
                </Box>
        )
}

type CardDiscount = {
        isInsurance: boolean,
        classes: any,
        _id: string,
        removeInsurance: (_id: string, isInsurance: boolean) => void,
        addInsurance: (_id: string, isInsurance: boolean) => void
}
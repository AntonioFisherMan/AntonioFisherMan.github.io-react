import { Grid, Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { figureOutDate } from '../../utils/helperFunctions/figureOutDate'
import { PinkText } from '../../common/Typography/PinkText'
import { Subtitle1 } from '../../common/Typography/Subtitle1'

const useStyles = makeStyles({
        sizeBlock: { display: 'flex' },
        sizeIcon: { marginLeft: 10 },
        text: { marginBottom: 11 }
})

export const InformCard: React.FC<InformCard> = ({ style, text, size, startDate, endDate }) => {
        const classes = useStyles()
        return (

                <Box>
                        {style && <PinkText text={`${style} DRESS`} variant="overline" />}
                        <Subtitle1 text={text} />
                        <Box className={classes.sizeBlock}>
                                <Subtitle1 text={`Size: ${size}`} />
                                <img src="images/svg/Vector (11).svg" alt="" className={classes.sizeIcon} />
                        </Box>
                        <Typography className={classes.text}>Rental period <PinkText text="* :" />{figureOutDate(startDate, endDate)} days</Typography>
                        <Subtitle1 text={`Dates: ${startDate}-${endDate}`} />
                </Box>


        )
}
type InformCard = {
        style?: string,
        text?: string,
        size?: string,
        startDate: Date,
        endDate: Date
}
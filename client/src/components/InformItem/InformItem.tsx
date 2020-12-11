import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { figureOutDate } from '../../utils/helperFunctions/figureOutDate'
import { PinkText } from '../../common/Typography/PinkText'


const useStyles = makeStyles({
        sizeBlock: { display: 'flex', marginTop: 5 },
        sizeIcon: { marginLeft: 10 },
        text: {}
})

export const InformItem: React.FC<InformItemProps> = ({ fashion, text, size, startDate, endDate }) => {
        const classes = useStyles()
        return (
                <Box>
                        {fashion && <PinkText text={`${fashion} DRESS`} variant="overline" />}
                        <Typography>{text} </Typography>
                        <Box className={classes.sizeBlock}>
                                <Typography>{`Size: ${size}`} </Typography>
                                <img src="images/svg/Vector (11).svg" alt="" className={classes.sizeIcon} />
                        </Box>
                        <Typography className={classes.text}>Rental period <PinkText text="* :" />{figureOutDate(startDate, endDate)} days</Typography>
                        <Typography>{`Dates: ${startDate} - ${endDate}`}</Typography>
                </Box>
        )
}
type InformItemProps = {
        fashion?: string,
        text?: string,
        size?: string,
        startDate: Date,
        endDate: Date
}
import { Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
import { TypographyType } from "../../types/types";


const defaultProps = {
        width: '90px',
        whiteSpace: 'nowrap',
}
const useStyles = makeStyles({
        headline: {
                width: '90px',
                whiteSpace: 'nowrap',
                marginTop: 35,
                marginBottom: 21
        },
        '@media (max-width: 600px)': {
                headline: {
                        width: '100%',
                        whiteSpace: 'pre-wrap'
                }
        },

})

export const SiteHeadline: React.FC<TypographyType> = ({ text, propsClasses }) => {
        const classes = useStyles()
        return (
                <Box borderBottom={1} {...defaultProps} className={propsClasses ? propsClasses : classes.headline} >
                        <Typography variant="caption">{text}</Typography>
                </Box >
        )

}




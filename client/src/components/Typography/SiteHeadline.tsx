import { Typography, Box } from "@material-ui/core";
import React from "react";
import { TypographyType } from "../../types/types";

const defaultProps = {
        style: { width: '90px' },
        whiteSpace: 'nowrap',
};


export const SiteHeadline: React.FC<TypographyType> = ({ text, classes }) => {
        return (
                <Box borderBottom={1} {...defaultProps} className={classes} >
                        <Typography variant="caption" >{text}</Typography>
                </Box>
        )

}




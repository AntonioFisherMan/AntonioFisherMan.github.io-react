import { Typography, Box } from "@material-ui/core";
import React from "react";
import { TypographyType } from "../../types/types";

const defaultProps = {
        paddingBottom: '18px',
        style: { width: '90px' },
        whiteSpace: 'nowrap'
};

export const SiteHeadline: React.FC<TypographyType> = ({ text }) => {
        return (
                <Box borderBottom={1} {...defaultProps} >
                        <Typography variant="caption">{text}</Typography>
                </Box>
        )

}




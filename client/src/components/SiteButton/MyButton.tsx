import React from 'react'
import { Button } from '@material-ui/core';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const styles = (theme: Theme) => createStyles({
        primary: {
                color: "white",
                borderRadius: 50,
                '&:hover': {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.dark,
                        fontWeight: "bold"
                }
        },
        secondary: {
                textTransform: "capitalize",
                borderRadius: 50,
                color: "black",
                '&:hover': {
                        color: theme.palette.primary,
                        fontWeight: "bold",
                        background: "none",
                }
        },
        icon: {
                fontSize: 12
        }
})
type PropsType = {
        href?: string,
        text?: string,
        variant?: "text" | "outlined" | "contained" | undefined
        color?: "inherit" | "primary" | "secondary" | "default" | undefined
}
export type MyButtonProps = PropsType & WithStyles<typeof styles>;

const MyButton: React.FC<MyButtonProps> = ({ href, text, classes, variant, color }) => {
        return (
                <Button variant={variant ? variant : "contained"} startIcon={variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null} href={href} color={color ? color : "primary"} className={!variant ? classes.primary : classes.secondary} >{text}</Button>
        )
}
export default withStyles(styles)(MyButton)




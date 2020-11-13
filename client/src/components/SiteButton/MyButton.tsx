import React from 'react'
import { Box, Button, CircularProgress } from '@material-ui/core';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { compose } from 'redux';
import { LoadingDataHOC } from '../../hoc/LoaingData';
import Preloader from '../common/Preloader';

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
        },
        wrapper: {
                margin: theme.spacing(1),
                position: 'relative',
        },
        buttonProgress: {
                position: 'absolute',
                top: '0',
                left: '40%'

        },
})
type PropsType = {
        href: string,
        text?: string,
        variant?: "text" | "outlined" | "contained" | undefined
        color?: "inherit" | "primary" | "secondary" | "default" | undefined,
        loading: boolean,
        isIcon?: boolean
}
export type MyButtonProps = PropsType & WithStyles<typeof styles>;
const MyButton: React.FC<MyButtonProps> = ({ href, isIcon = true, text, classes, variant, color, loading }) => {
        if (href !== "") {
                return (
                        <Button
                                component={React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                                        <RouterLink to={href} ref={ref} {...itemProps} />
                                ))}
                                variant={variant ? variant : "contained"}
                                startIcon={isIcon && variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null}
                                href={href}
                                color={color ? color : "primary"}
                                className={!variant ? classes.primary : classes.secondary} >
                                {text}
                        </Button>
                );
        } else {
                return (
                        <Box className={classes.wrapper}>
                                <Button
                                        disabled={loading}
                                        variant={variant ? variant : "contained"}
                                        startIcon={variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null}
                                        href={href}
                                        color={color ? color : "primary"}
                                        className={!variant ? classes.primary : classes.secondary} >
                                        {text}
                                </Button>
                                { loading && <Box className={classes.buttonProgress}><Preloader size={18} loading={loading} /></Box>}
                        </Box>


                );
        }


}

export default compose(
        LoadingDataHOC,
        withStyles(styles))
        (MyButton)




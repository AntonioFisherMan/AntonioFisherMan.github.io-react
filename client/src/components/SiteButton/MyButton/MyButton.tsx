import React from 'react'
import { Box, Button } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoaingData'
import Preloader from '../../common/Preloader'
import { styles } from './style'


const MyButton: React.FC<MyButtonProps> = ({ href, isIcon = true, text, classes, variant, color, loading, size, fullWidth }) => {

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
                                size={size}
                                fullWidth={fullWidth ? fullWidth : false}
                                className={!variant ? classes.primary : classes.secondary} >
                                {text}
                        </Button>

                )
        } else {
                return (
                        <Box className={classes.wrapper}>
                                <Button
                                        disabled={loading}
                                        variant={variant ? variant : "contained"}
                                        startIcon={variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null}
                                        href={href}
                                        color={color ? color : "primary"}
                                        className={!variant ? classes.primary : classes.secondary}
                                        fullWidth={fullWidth ? fullWidth : false}
                                        size={size}>

                                        {text}
                                </Button>
                                { loading && <Box className={classes.buttonProgress}><Preloader size={18} loading={loading} /></Box>}
                        </Box>


                )
        }


}

export default compose(LoadingDataHOC, withStyles(styles))(MyButton)



type PropsType = {
        size?: "medium" | "large" | "small" | undefined,
        href: string,
        text?: string,
        variant?: "text" | "outlined" | "contained" | undefined
        color?: "inherit" | "primary" | "secondary" | "default" | undefined,
        loading: boolean,
        isIcon?: boolean,
        fullWidth?: boolean
}
export type MyButtonProps = PropsType & WithStyles<typeof styles>

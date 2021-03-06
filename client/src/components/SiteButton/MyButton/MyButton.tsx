import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoadingData'
import Preloader from '../../../common/Preloader'
import { styles } from './style'


const MyButton: React.FC<MyButtonProps> = ({ href, isIcon = true, text, propsClasses, classes, variant, color, loading, size, fullWidth, onClick }) => {
        const [onClicked, setOnClicked] = useState(false)
        if (href !== "") {
                return (
                        <Button
                                component={React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                                        <RouterLink to={href} ref={ref} {...itemProps} />
                                ))}
                                onClick={onClick}
                                variant={variant ? variant : "contained"}
                                startIcon={isIcon && variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null}
                                href={href}
                                color={color ? color : "primary"}
                                size={size}
                                fullWidth={fullWidth ? fullWidth : false}
                                className={propsClasses ? propsClasses : color === "default" ? classes.default : !variant ? classes.primary : classes.secondary}
                        >
                                {text}
                        </Button >

                )
        } else {
                return (
                        <Box className={classes.wrapper}>
                                <Button
                                        onClick={() => setOnClicked(true)}
                                        disabled={onClicked && loading}
                                        variant={variant ? variant : "contained"}
                                        startIcon={isIcon && variant === "text" ? <ArrowBackIosOutlinedIcon className={classes.icon} /> : null}
                                        href={href}
                                        color={color ? color : "primary"}
                                        className={propsClasses ? propsClasses : color === "default" ? classes.default : !variant ? classes.primary : classes.secondary}
                                        fullWidth={fullWidth ? fullWidth : false}
                                        size={size}>

                                        {text}
                                </Button>
                                {onClicked && loading && <Box className={classes.buttonProgress}><Preloader size={18} loading={loading} /></Box>}
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
        loading?: boolean,
        isIcon?: boolean,
        fullWidth?: boolean,
        onClick: () => void,
        propsClasses: any,
        btnLoad?: boolean
}
export type MyButtonProps = PropsType & WithStyles<typeof styles>

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { IconButton, withStyles } from '@material-ui/core';

const styles = theme => ({
        iconBlock: {
                padding: 2
        }
})

export const MyCloseIcon = withStyles(styles)((props) => {
        return (

                <IconButton className={props.classes.iconBlock} color="primary">
                        <SvgIcon {...props}>
                                <path d="M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6Z" />
                        </SvgIcon>
                </IconButton>


        )
})
export const MyAddIcon = withStyles(styles)((props) => {
        return (

                <IconButton className={props.classes.iconBlock} color="primary">
                        <SvgIcon {...props}>
                                <path d="M16 16V2H2V16H16ZM16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 0.89 0.9 0 2 0H16ZM8 4H10V8H14V10H10V14H8V10H4V8H8V4Z" />
                        </SvgIcon>
                </IconButton>


        )
})

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { IconButton, withStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

export const MyStartIcon = (props) => {
        return (
                <IconButton color="primary">
                        {props.filled ? <SvgIcon {...props}>
                                <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z" fill="#E77E83" />
                        </SvgIcon> :
                                <SvgIcon {...props}>
                                        <path d="M10 13.39L6.24 15.66L7.23 11.38L3.91 8.5L8.29 8.13L10 4.09L11.71 8.13L16.09 8.5L12.77 11.38L13.76 15.66L10 13.39ZM20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.45 11.97L3.82 19L10 15.27L16.18 19L14.54 11.97L20 7.24Z" fill="#E77E83" />
                                </SvgIcon>}
                </IconButton>
        )

}

export const ExpandIcon = ({ expanded }) => {
        return (
                <>
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </>
        )
}

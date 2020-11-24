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
export const MyDateIcon = () => {
        return (
                <IconButton color="primary">
                        <SvgIcon >
                                <path d="M6 9V11H4V9H6ZM10 9V11H8V9H10ZM14 9V11H12V9H14ZM16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H2C0.89 20 0 19.1 0 18V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H3V0H5V2H13V0H15V2H16ZM16 18V7H2V18H16ZM6 13V15H4V13H6ZM10 13V15H8V13H10ZM14 13V15H12V13H14Z" fill="#979797" fill-opacity="0.5" />
                        </SvgIcon>
                </IconButton>
        )
}
export const MyUploadIcon = () => {
        return (
                <IconButton color="primary">
                        <SvgIcon >
                                <path d="M13.5 0C16 0 18 2 18 4.5C18 5.38 17.75 6.21 17.31 6.9L20.39 10L19 11.39L15.88 8.32C15.19 8.75 14.37 9 13.5 9C11 9 9 7 9 4.5C9 2 11 0 13.5 0ZM13.5 2C12.837 2 12.2011 2.26339 11.7322 2.73223C11.2634 3.20107 11 3.83696 11 4.5C11 5.16304 11.2634 5.79893 11.7322 6.26777C12.2011 6.73661 12.837 7 13.5 7C14.163 7 14.7989 6.73661 15.2678 6.26777C15.7366 5.79893 16 5.16304 16 4.5C16 3.83696 15.7366 3.20107 15.2678 2.73223C14.7989 2.26339 14.163 2 13.5 2ZM5.5 12.5L2 17H16L11.5 11L8 15.5L5.5 12.5ZM18 18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H7.5C7.18 2.77 7 3.61 7 4.5C7 6.22391 7.68482 7.87721 8.90381 9.09619C10.1228 10.3152 11.7761 11 13.5 11C14.18 11 14.84 10.89 15.46 10.7L18 13.24V18Z" fill="#E77E83" />
                        </SvgIcon>
                </IconButton>
        )
}

import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ServerMessageData } from '../../../hoc/ServerMessageData';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import { compose } from 'redux';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ServerMessage = ({ code, errors, success, open, closeMessage, }) => {
    return (
        <Snackbar open={open} onClose={closeMessage} autoHideDuration={4000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={closeMessage} severity={code === "success" ? "success" : "error"}>
                {errors.message || success.message ?
                    code === "success" ? success.message : errors.message : "Error"}
            </Alert>
        </Snackbar >
    )
}

export default compose(
    ServerMessageData
)(ServerMessage)


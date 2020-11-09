
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ServerMessageData } from '../../../hoc/ServerMessageData';

import { compose } from 'redux';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ServerMessage = ({ code, errors, success, open, closeMessage, }) => {
    debugger
    return (
        <Snackbar open={open} onClose={closeMessage}>
            <Alert onClose={closeMessage} severity={code === "success" ? "success" : "error"}>
                {errors.message & success.message ?
                    code === "success" ? success.message : errors.message : "Error"}
            </Alert>

        </Snackbar>
    )
}

const user ="ASddsdads"


export default compose(
    ServerMessageData
)(ServerMessage)



import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ServerMessageData } from '../../hoc/ServerMessageData';

import { compose } from 'redux';



function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
type ServerMessage = {
    code: string,
    errors: any,
    success: any,
    open: boolean,
    closeMessage: () => void
}

const ServerMessage: React.FC<ServerMessage> = ({ code, errors, success, open, closeMessage, }) => {
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


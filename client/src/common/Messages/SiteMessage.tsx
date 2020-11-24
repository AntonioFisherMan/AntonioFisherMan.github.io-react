import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme, Box } from '@material-ui/core';

type SiteMessage = {
        kind?: "success" | "info" | "warning" | "error" | undefined,
        text: string
}

function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme: Theme) => ({
        root: {
                display: "flex",
                justifyContent: "center",
                margin: theme.spacing(2),
                maxHeight: "50px",
                alignItems: "center"
        },
}))
export const SiteMessage: React.FC<SiteMessage> = ({ kind, text }) => {
        const classes = useStyles()
        return (
                <Box className={classes.root}>
                        <Alert severity={kind ? kind : "info"} variant="filled">
                                {text}
                        </Alert>
                </Box>

        )
}

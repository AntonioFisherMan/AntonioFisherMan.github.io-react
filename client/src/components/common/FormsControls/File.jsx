import React from 'react'
import { createStyles, withStyles, Fab } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const styles = theme => createStyles({
    input: {
        display: "none"
    }
})

export const File = withStyles(styles)(({ input, type, meta: { touched, error, warning }, classes }) => {
    delete input.value
    const hasError = error && touched
    return (
        <>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">

                <Fab
                    color="secondary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>Upload photo
        </Fab>
            </label>
            { hasError ? <span>{error}</span> : null}
        </>
    )
})

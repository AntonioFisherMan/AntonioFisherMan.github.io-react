import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { MyUploadIcon } from '../../assets/icons/icons'
import { makeStyles } from '@material-ui/core'
import { DropzoneDialog } from 'material-ui-dropzone'


const useStyles = makeStyles({
  btn: {
    width: '100%',
    background: '#F7F8FC',
    border: '1px solid #E9ECF0',
  }
})
const UploadFile = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <Button
        className={classes.btn}
        endIcon={<MyUploadIcon />}
        onClick={() => setOpen(true)}
      ></Button>
      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        filesLimit={props.filesLimit ? props.filesLimit : 1}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          props.onSaveFiles(files)
          setOpen(false)
        }}
        showPreviews={true}
        showFileNamesInPreview={false}
      />
    </>

  )
}

export default UploadFile
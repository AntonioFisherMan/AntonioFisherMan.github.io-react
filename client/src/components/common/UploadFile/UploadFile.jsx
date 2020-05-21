import React from 'react'
import {Field} from 'redux-form'
import {File} from '../../common/FormsControls/File'
const UploadFile=(props)=>{
  return(
    <div>
    <Field type="file" alt="" component={File} src="images/svg/Vector (25).svg" name={props.name} className="form-control" />
    </div>
  )
}

export default UploadFile
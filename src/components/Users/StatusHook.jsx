import React, { useState } from 'react'
import { useEffect } from 'react';

const StatusHook = (props) => {
     let [editMode,setEditMode]=useState(false);
     let [status,setStatus]=useState(props.status);
    
     useEffect(()=>{
         setStatus(props.status)
     },[props.status])

     const activateMode=()=>{
         setEditMode(true)
         console.log(props.status+"a")
     }
     const deactivateMode=()=>{
         setEditMode(false);
         props.updateStatus(status)
         console.log(props.status+"de")
     }
     const onStatusChange=(e)=>{
         setStatus(e.currentTarget.value)
     }
    return (
        <>
    
            {!editMode &&
                <div>
                    <span onClick={activateMode}>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateMode} value={status}/>
                </div>
            }
        </>
    )
}

export default StatusHook
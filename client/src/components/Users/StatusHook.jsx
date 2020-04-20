import React, { useState } from 'react'
import { useEffect } from 'react';

const StatusHook = (props) => {
     let [editMode,setEditMode]=useState(false);
     let [status,setStatus]=useState(props.status);
    
     useEffect(()=>{
         setStatus(props.status)
     },[props.status])

     const activateMode=()=>{
         setEditMode(true);
     }
     const deactivateMode=()=>{
         setEditMode(false);
         props.updateStatus(status)
     }
     const onStatusChange=(e)=>{
         setStatus(e.currentTarget.value)
     }
    return (
        <>
            {!editMode &&
                <div>
                    <span onClick={activateMode}>{!status?"Status":status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateMode} placeholder={"Status"}value={status}/>
                </div>
            }
        </>
    )
}

export default StatusHook
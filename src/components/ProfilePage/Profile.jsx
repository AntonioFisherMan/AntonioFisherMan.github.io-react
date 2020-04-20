import React from 'react'
import { useState } from 'react'
import { MinLength, MaxLength, required } from '../../utils/Validators/validators'
import { Field } from 'redux-form'
import { Input } from '../common/FormsControls/Input'
import { reduxForm } from 'redux-form'
import userPhoto from '../../assets/user.png'
import StatusHook from '../Users/StatusHook'
import Status from '../Users/Status'

const Profile = (props) => {
    let [editMode, setEditMode] = useState(false)
    let onSubmit = (data) => {
        const promise = props.saveProfile(data)
        promise.then(
            () => setEditMode(false)
        )
        .catch(
            "error data"
        )
    }
    let photoSelect = (e) => {
        if (e.target.files.length) {
        const promise=props.savePhoto(e.target.files[0])
        promise.then(
            () => setEditMode(false)
        )
        }
    }
    debugger
    return (
        <div>
            <div className="error">{props.globalError?<div className="btn btn-danger" >{props.globalError}</div>:null}</div>
            {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} editMode={setEditMode} onSubmit={onSubmit} profile={props.profile} /> : <UserProfileData  updateStatus={props.updateStatus} status={props.status} isOwner={props.isOwner} editMode={() => { setEditMode(true) }} profile={props.profile} />}
            {props.isOwner && editMode && <input className="btn btn-info" style={{ margin: '0 auto', display: 'block', marginTop: '10px' }} onChange={photoSelect} type={"file"} />}
           
        </div>
    )
}

const MinLengthCreator5 = MinLength(5);
const MaxLengthCreator40 = MaxLength(40);

const UserProfileForm = ({ error, handleSubmit, profile, editMode }) => {
    return <div className="container">
        <div className="row">
            <form onSubmit={handleSubmit} className="col-12 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <b>Full name</b>:  <Field type="text" id="fullName" name={"fullName"} className="form-control" placeholder="fullName"
                        component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator40]} />
                </div>
                <div>
                    <b>Looking for a job</b>:  <Field type="checkbox" id="lookingForAJob" name={"lookingForAJob"} className="form-control"
                        component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator40]} />
                </div>
                <div>
                    <b>My professional skills</b>:  <Field type="text" id="lookingForAJobDescription" name={"lookingForAJobDescription"} className="form-control"
                        component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator40]} placeholder="My professional skills" />
                </div>

                <div>
                    <b>About me</b>:
                    <Field type="text" id="aboutMe" name={"aboutMe"} className="form-control" placeholder="aboutMe"
                        component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator40]} />
                </div>
                <div>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                        return <div key={key} >
                            <b>{key}: {<Field type="text" id={key} name={"contacts." + key} className="form-control" placeholder={key}
                                component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator40]} />}</b>
                        </div>
                    })}
                </div>
                <div className="d-flex" style={{ marginTop: '20px' }}>
                    <button className="btn btn-success">Save</button>
                    <p className="btn btn-danger" onClick={()=>editMode(false)}>Cancel</p>
                </div>
                {error ? <div className="form-error">
                    <p>{error}</p>
                </div> : null
                }
            </form>
        </div>
    </div>

}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(UserProfileForm)


const UserProfileData = ({profile, editMode, isOwner, updateStatus,status}) => {
    return (
        <>
       
        <div className="container">
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-12 d-flex align-items-center justify-content-center flex-column">
                    {isOwner && <div><button className="btn btn-warning" style={{ width: '100px', marginBottom: '10px' }} onClick={editMode}>edit</button></div>}
                    <img src={profile.photos.small != null && profile.photos.large ? profile.photos.large : userPhoto} alt="" />
                    <h1>{profile.fullName}</h1>
                    <p>{profile.aboutMe}</p>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} >
                            <b>{key}:{profile.contacts[key]}</b>
                        </div>
                    })}
                     {isOwner?<StatusHook  updateStatus={updateStatus} status={status}/>:<p>{"Status: "+status}</p>}
                </div>
            </div>
        </div>
</>
    )
}
export default Profile
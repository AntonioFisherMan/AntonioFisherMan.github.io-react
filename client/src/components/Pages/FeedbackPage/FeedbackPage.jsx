import React from 'react'
import './FeedbackPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button1 from '../../SiteButtons/Button1/Button1'
import {reduxForm,Field} from 'redux-form'
import {Textarea} from '../../common/FormsControls/Textarea'
import {File} from '../../common/FormsControls/File'




const FeedbackPage = (props) => {
   
    const onSubmit = (formData) => {
        let images=[];
        if(formData){
         images=[formData.feedbackImg1,formData.feedbackImg2,formData.feedbackImg3]
        }
        debugger
       props.setReviews(props.name,props.photo,images,formData.feedbackTextarea,props.rating)
     }
    return (
        <div>
            <HeaderBottom />

            <section className="feedbackBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Profile" />
                        </div>
                    </div>
                    <div className="feedbackInform">
                        <div>
                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                        <div className="feedbackList">
                            <div className="returnLinks">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                        </div>
                                        <div className="col-4">
                                            <p>Item</p>
                                        </div>
                                        <div className="col-5 d-flex justify-content-center">
                                            <p>Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feedbackItem">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="feedbackItemImg" src="images/Mask-4.png" alt="" />
                                        </div>
                                        <div className="col-5">
                                            <p className="bagCard__slogan">maxi DRESS</p>
                                            <div className="bagCard__list">
                                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                            </div>
                                            <div className="bagCard__size d-flex">
                                                <p>Size: XS</p>
                                                <img src="images/svg/Vector (11).svg" alt="" />
                                            </div>
                                            <p className="bagCard__p">Rental period* : 7 days</p>
                                            <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                            <p className="feedbackItemText">Show others how this outfit looks on you!
                                            <br />
                                            Upload pictures here</p>


                                        </div>
                                        <div className="col-4">
                                            <div className="feedbackItemColumn2">
                                                <div className="stars">
                                                    <i className="far fa-star stars__out">
                                                        <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                    </i>
                                                    <i className="far fa-star stars__out">
                                                        <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                    </i>
                                                    <i className="far fa-star stars__out">
                                                        <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                    </i>
                                                    <i className="far fa-star stars__out">
                                                        <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                    </i>
                                                    <i className="far fa-star stars__out">
                                                        <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                                    </i>
                                                </div>
                                                <div>
                                                    <p className="feedbackItemGrey">Rate your rented outfit.<br />
                                                    Let others know what you think!</p>
                                                </div>
                                                <p>Review</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <ReduxFeedbackForm onSubmit={onSubmit} setReviews={props.setReviews}/>
                           
                        </div>







                        <div className="row feedbackList-active" >
                            <div className="col-3 returnItem-active">
                                <p style={{ minHeight: '250px' }}>Item</p>
                                <p style={{ minHeight: '150px ' }}>Rate</p>

                            </div>
                            <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                                <div className="d-flex" style={{ minHeight: '250px !important' }}>
                                    <div>
                                        <img src="images/Mask-4.png" alt="" />
                                    </div>
                                    <div>
                                        <p >maxi DRESS</p>
                                        <p>A perfect flirty number for Balls and Black Tie.</p>
                                        <div className=" d-flex">
                                            <p>Size: XS</p>
                                            <img src="images/svg/Vector (11).svg" alt="" />
                                        </div>
                                        <p>Rental period* : 7 days</p>
                                        <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                    </div>

                                </div>

                                <div className="feedbackItemColumn2" style={{ minHeight: '250px !important', display: 'flex', justifyVontent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div className="stars">
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{ width: '100%' }}></i>
                                        </i>
                                    </div>
                                    <div>
                                        <p className="feedbackItemGrey">Rate your rented outfit.<br />
                                            Let others know what you think!</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row feedbackItem-active">
                            <div className="col-12">
                                <form action="" style={{ marginTop: '20px' }}>
                                    <p style={{ textAlign: 'center' }}>Review</p>
                                    <p className="feedbackItemText">Show others how this outfit looks on you!
                                            <br />
                                            Upload pictures here</p>
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 d-flex align-items flex-column">
                                <div className="feedbackForm2">
                                    <textarea className="form-control" id="feedbackForm2-textarea" />
                                    <Button1 text="Send" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


const FeedbackForm=(props)=>{
    return(
        <div className="row">
        <div className="col-3"></div>
        <div className="col-5">
            <form onSubmit={props.handleSubmit} className="feedbackForm">
                <div className="form-group">
                    <Field type="file" alt="" component={File} src="images/svg/Vector (25).svg" name="feedbackImg1" className="form-control" />
                </div>
                <div className="form-group">
                    <Field type="file" alt=""component={File}  src="images/svg/Vector (25).svg"name="feedbackImg2" className="form-control" />
                </div>
                <div className="form-group">
                    <Field type="file" alt="" component={File} src="images/svg/Vector (25).svg" name="feedbackImg3"className="form-control" />
                </div>
                <Field component={Textarea} className="form-control"  id="feedbackForm2-textarea" name="feedbackTextarea" />
                <button className="ml-auto ">Send</button>
                </form>
     </div>
    </div>
    )
}
export const ReduxFeedbackForm = reduxForm({
    form: 'feedback'
})(FeedbackForm)

export default FeedbackPage
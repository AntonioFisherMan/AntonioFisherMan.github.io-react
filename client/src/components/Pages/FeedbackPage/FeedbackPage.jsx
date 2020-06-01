import React from 'react'
import './FeedbackPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import {reduxForm,Field} from 'redux-form'
import {Textarea} from '../../common/FormsControls/Textarea'
import {Link} from 'react-router-dom'
import UploadFile from '../../common/UploadFile/UploadFile'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import { required } from '../../../utils/Validators/validators'
import { figureOutDate } from '../../../utils/helperFunctions/figureOutDate'

const FeedbackPage = (props) => {
    const goodsId=props.match.params.id;
    const removeItem = () => {
        props.clearReview()
    }  
    const onSubmit = (data) => {
        let formData = new FormData();
        if(data.images){ 
            for(var i=0;i<data.images.length;i++){
                formData.append("file", data.images[i])
            }
        }
    formData.append("reviewText",data.feedbackTextarea)
       props.setReviews(formData,goodsId);
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
                      
    {props.success&&props.success.message?<SuccessMessage message={props.success.message}/>:props.review.length>0?
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
                            {props.review.map(review=><div className="feedbackItem">
                             
                                <div className="container">
                              
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="feedbackItemImg" src={review.photos?review.photos.middle:review.photo} alt="" />
                                        </div>
                                        <div className="col-5">
                                            <p className="bagCard__slogan">{review.style} DRESS</p>
                                            <div className="bagCard__list">
                                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                            </div>
                                            <div className="bagCard__size d-flex">
                                            <p>Size:{review.size}</p>
                                         
                                                <img src="images/svg/Vector (11).svg" alt="" />
                                            </div>
                                            <p className="bagCard__p">Rental period* : {figureOutDate(review.startDate, review.endDate)} days</p>
                                            <p>Dates: {review.startDate} - {review.endDate} </p>
                                            <p className="feedbackItemText">Show others how this outfit looks on you!
                                            <br />
                                            Upload pictures here</p>


                                        </div>
                                        <div className="col-4">
                                       
                                            <div className="feedbackItemColumn2">
                                            <img  onClick={() => {removeItem()}} src="/images/svg/Vector (14).svg" alt="" className="ml-auto" />
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
                            </div>)}
                       
                            <ReduxFeedbackForm  errors={props.errors}onSubmit={onSubmit} />
                        </div>
:<div className="row justify-content-center  align-items-center" style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">Выберите товар для отзыва в вашых заказах<Link style={{color:'grey'}}to={"/orders"}>orders</Link>или каталоге товаров<Link style={{color:'grey'}} to={"/catalog"}>catalog</Link></h4> </div>}






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
                                        <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="file" alt="" src="images/svg/Vector (25).svg" className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 d-flex align-items flex-column">
                                 <ReduxFeedbackForm  errors={props.errors} onSubmit={onSubmit} />
                            </div>
                            <div>
                          
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
        <div className="col-9">
            <form onSubmit={props.handleSubmit} className="feedbackForm">
               <UploadFile name={"images"}/>
               <div className="feedbackFormSubmit">
                <Field validate={[required]}component={Textarea} className="form-control"  id="feedbackForm2-textarea" name="feedbackTextarea" />
                <button className="formBtn ml-auto" >Send</button>
               </div>
                </form>
                {props.errors && props.errors.id === 'ERRORS_FILE_UPLOAD' ? <ErrorMessage message={props.errors.message} /> : null}
     </div>
    </div>
    )
}
export const ReduxFeedbackForm = reduxForm({
    form: 'feedback'
})(FeedbackForm)

export default FeedbackPage

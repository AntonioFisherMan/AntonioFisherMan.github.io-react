import { testAPI } from "../api/api"
const GET_REVIEWS="GET_REVIEWS"


let initialState={
   reviews:[]
}

const  ReviewsReducer=(state=initialState,action)=>{
   switch(action.type){
     case GET_REVIEWS:
         return{...state,reviews:[...action.payload]}
    default:return state;
   }
   
} 

//Action
const setReviews=(payload)=>({type:GET_REVIEWS,payload})

//Thunk Creator
export const getReviews=()=>dispacth=>{
    testAPI.getReviews()
    .then(data=>{
       dispacth(setReviews(data))
    })
}
export const setReviewsThunk=(name,photo,images,reviews,rating)=>dispacth=>{
    testAPI.setReviews(name,photo,images,reviews,rating);
}

export default ReviewsReducer
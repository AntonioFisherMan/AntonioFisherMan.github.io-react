
let initialState={
    goods:[
        {goods_id:1,img:"/images/Mask-2.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:2,img:"/images/Mask-3.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:3,img:"/images/Mask-4.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:4,img:"/images/Mask-5.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:5,img:"/images/Mask.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:6,img:"/images/Mask-3.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:7,img:"/images/Mask-4.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
        {goods_id:8,img:"/images/Mask-2.png",headline:"Shake It Off Embellished",slogan:"MINI DRESS",price:"€61.17"},
    ]
}

const CatalogReducer=(state=initialState,action)=>{
    switch(action.type){
        default: return state
    }
}

export default CatalogReducer
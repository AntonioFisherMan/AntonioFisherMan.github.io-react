import React from 'react'
import './CatalogPage.css'
import { Link } from 'react-router-dom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button1 from '../../SiteButtons/Button1/Button1'
import Paginator from '../../common/Paginator/Paginator'
import { Field, reduxForm } from 'redux-form'
import Preloader from '../../common/Preloader'


const CatalogPage = (props: any) => {
    const onSubmit = (formData: object) => {
        let data = []
        for (let [key, value] of Object.entries(formData)) {
            if (value === true) data.push(key)
        }
        props.changeFilter(data)
    }

    return (

        <div>
            {props.goods.length > 0 ? <div>
                <section className="linkBlock">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <div className="linkItem">
                                    <p>Show</p>
                                    <select className="linkBtn" onChange={e => props.changePageSize(e.target.value)}>
                                        <option defaultValue="3">3</option>
                                        <option >6</option>
                                        <option >12</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items ">
                                <div className="ml-auto" >

                                    <select className="sortBtn" onChange={e => props.changeSortBy(e.target.value)} >
                                        <option defaultValue="SORT BY">SORT BY</option>
                                        <option >От дешевых к дорогим</option>
                                        <option >От дорогим к дешевым</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ourProducts">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-2">
                                <div className="productsFilter">
                                    <h4> Filter</h4>
                                    {props.filter ? props.filter.map((filter: any) => <p className="d-flex">
                                        {filter} <img onClick={() => { props.removeFilter(filter) }} src="images/svg/Vector (14).svg" alt="" />
                                    </p>) : <p>All</p>}
                                </div>
                            </div>
                            <div className="col-12 col-sm-10">
                                <SiteHeadline text="All our products" />
                            </div>
                        </div>

                        <div className="catalog">

                            <ReduxFilterForm onSubmit={onSubmit} />
                            <div className="catalogList">
                                {
                                    props.goods.length > 0 ? props.goods.map((item: any) => <div className="goodsItem" key={item._id}>
                                        <Link to={`details/${item._id}`}><img src={item.photos.middle} alt="" /></Link>
                                        <h4>{item.text}</h4>
                                        <p>{item.style} Dress</p>
                                        <h5>€{item.price}</h5>
                                        <Button1 to={`details/${item._id}`} text="Подробнее" />
                                    </div>) :
                                        <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">К сожалению по выбранному запросу товаров нет в наличии<br /><i className="fab fa-linux"></i></h4> </div>
                                }


                            </div>
                        </div>
                        <div className="row">
                            <Paginator pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                                totalCount={props.totalCount} pageNumber={props.pageNumber} portionSize={1} />
                        </div>
                    </div>

                </section>
            </div> : <Preloader />}
        </div>
    )
}

const FilterForm = (props: any) => {

    return (
        <form className="sidebar" onSubmit={props.handleSubmit}>
            <div className="sidebarItem">
                <hr />
                <div className="sidebarText">
                    <p>Size</p>
                    <img src="images/svg/Vector (7).svg" alt="" />
                </div>
                <ul className="sidebarMenu">
                    <label><Field type="checkbox" component={"input"} name="size36" className="checkbox" /><span className="fake"></span><span className="checkText">36</span></label>
                    <label><Field type="checkbox" component={"input"} name="size38" className="checkbox" /><span className="fake"></span><span className="checkText">38</span></label>
                    <label><Field type="checkbox" component={"input"} name="size40" className="checkbox" /><span className="fake"></span><span className="checkText">40</span></label>
                    <label><Field type="checkbox" component={"input"} name="size42" className="checkbox" /><span className="fake"></span><span className="checkText">42</span></label>
                    <label><Field type="checkbox" component={"input"} name="S" className="checkbox" /><span className="fake"></span><span className="checkText">S</span></label>
                    <label><Field type="checkbox" component={"input"} name="M" className="checkbox" /><span className="fake"></span><span className="checkText">M</span></label>
                    <label><Field type="checkbox" component={"input"} name="L" className="checkbox" /><span className="fake"></span><span className="checkText">L</span></label>
                    <label><Field type="checkbox" component={"input"} name="XL" className="checkbox" /><span className="fake"></span><span className="checkText">XL</span></label>
                </ul>
            </div>
            <div className="sidebarItem">
                <hr />
                <div className="sidebarText">
                    <p>Colour</p>
                </div>
                <ul className="sidebarMenu">
                    <label><Field type="checkbox" component={"input"} name="Black" className="checkbox" /><span className="fake"></span><span className="checkText">Black</span></label>
                    <label><Field type="checkbox" component={"input"} name="Blue" className="checkbox" /><span className="fake"></span><span className="checkText">Blue</span></label>
                    <label><Field type="checkbox" component={"input"} name="White" className="checkbox" /><span className="fake"></span><span className="checkText">White</span></label>
                    <label><Field type="checkbox" component={"input"} name="Cream" className="checkbox" /><span className="fake"></span><span className="checkText">Cream</span></label>
                    <label><Field type="checkbox" component={"input"} name="Floral" className="checkbox" /><span className="fake"></span><span className="checkText">Floral</span></label>
                    <label><Field type="checkbox" component={"input"} name="Pink" className="checkbox" /><span className="fake"></span><span className="checkText">Pink</span></label>
                    <label><Field type="checkbox" component={"input"} name="Red" className="checkbox" /><span className="fake"></span><span className="checkText">Red</span></label>
                </ul>
            </div>
            <div className="sidebarItem">
                <hr />
                <div className="sidebarText">
                    <p>Style</p>
                </div>
                <ul className="sidebarMenu">
                    <label><Field type="checkbox" component={"input"} name="Mini" className="checkbox" /><span className="fake"></span><span className="checkText">Mini</span></label>
                    <label><Field type="checkbox" component={"input"} name="Maxi" className="checkbox" /><span className="fake"></span><span className="checkText">Maxi</span></label>
                    <label><Field type="checkbox" component={"input"} name="Midi" className="checkbox" /><span className="fake"></span><span className="checkText">Midi</span></label>
                    <label><Field type="checkbox" component={"input"} name="Jumsuit" className="checkbox" /><span className="fake"></span><span className="checkText">Jumsuit</span></label>
                    <label><Field type="checkbox" component={"input"} name="Tops" className="checkbox" /><span className="fake"></span><span className="checkText">Tops</span></label>
                    <label><Field type="checkbox" component={"input"} name="Bottoms" className="checkbox" /><span className="fake"></span><span className="checkText">Bottoms</span></label>
                </ul>
            </div>
            <div className="productsBtn">
                <button>Apply</button>
            </div>
        </form>
    )
}


export const ReduxFilterForm = reduxForm({
    form: 'filter'
})(FilterForm)

export default CatalogPage
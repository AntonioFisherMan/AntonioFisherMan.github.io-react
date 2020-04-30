import React from 'react'
import './CatalogPage.css'
import { Link } from 'react-router-dom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import userPhoto from '../../../assets/user.png'
import Button1 from '../../SiteButtons/Button1/Button1'
import PopUp from '../../PopUp/PopUp'
import  styles from'../../SiteButtons/Button1/Button1.module.css'

const CatalogPage = (props) => {

    setTimeout(function() {
        props.isPopUp(true)
      },3000);
    const setProduct=(payload)=>{
          props.setProduct(payload)
    }
    return (
        <div> 
            {props.popUp ? <PopUp/>: null}
            <section className="linkBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <div className="linkItem">
                                <p>Show</p>
                                <div className="dropdown show">
                                    <Link className="btn dropdown-toggle linkBtn" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        24
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" href="#">Action</Link>
                                        <Link className="dropdown-item" href="#">Another action</Link>
                                        <Link className="dropdown-item" href="#">Something else here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex align-items ">
                            <div className="ml-auto" >
                                <div className="dropdown show">
                                    <Link className="btn dropdown-toggle sortBtn" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SORT BY
                                   </Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" href="#">Action</Link>
                                        <Link className="dropdown-item" href="#">Another action</Link>
                                        <Link className="dropdown-item" href="#">Something else here</Link>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                        <div className="col-12 col-sm-10">
                            <SiteHeadline text="All our products" />
                        </div>
                    </div>

                    <div className="catalog">
                        <div className="sidebar">
                            <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                    <p>Size</p>
                                    <img src="images/svg/Vector (7).svg" alt="" />
                                </div>
                                <ul className="sidebarMenu">
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">34</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">36</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">38</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">40</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">42</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">S</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">M</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">L</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">XL</span></label>
                                </ul>
                            </div>
                            <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                    <p>Colour</p>
                                </div>
                                <ul className="sidebarMenu">
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Black</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Blue</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">White</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Cream</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Floral</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Pink</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Red</span></label>
                                </ul>
                            </div>
                            <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                    <p>Style</p>

                                </div>
                                <ul className="sidebarMenu">
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Mini</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Maxi</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Midi</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Jumsuit</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Tops</span></label>
                                    <label><input type="checkbox" className="checkbox" /><span className="fake"></span><span className="checkText">Bottoms</span></label>
                                </ul>
                            </div>
                            <div className="productsBtn">
                                <button>Apply</button>
                            </div>
                        </div>

                        <div className="catalogList">
                            {
                                props.goods.map(item => <div className="goodsItem" key={item._id}>
                                    <Link to={`details/${item._id}`}><img src={item.img} alt="" /></Link>
                                    <h4>{item.text}</h4>
                                    <p>{item.slogan}</p>
                                    <h5>€{item.price}</h5>
                               
                                    <Button1 to={`details/${item._id}`} text="Подробнее"/>
                                  
                                </div>)
                            }
                            <nav aria-label="Page navigation example" className="productsPagination">
                                <ul className="productsPagination">
                                    <li className="pageItem">
                                        <Link className="pageLink" href="#" aria-label="Previous">
                                            <i className="fas fa-chevron-left" aria-hidden="true"></i>
                                            <span className="sr-only">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="pageItem"><Link className="pageLink" href="#">1</Link></li>
                                    <li className="pageItem"><Link className="pageLink" href="#">2</Link></li>
                                    <li className="pageItem"><Link className="pageLink" href="#">3</Link></li>
                                    <li className="pageItem">
                                        <Link className="pageLink" href="#" aria-label="Next">
                                            <i className="fas fa-chevron-right" aria-hidden="true"></i>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default CatalogPage
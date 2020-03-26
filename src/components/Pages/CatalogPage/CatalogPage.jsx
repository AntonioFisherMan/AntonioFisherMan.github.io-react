import React from 'react'
import styles from './CatalogPage.module.css'
import {Link} from 'react-router-dom'

const CatalogPage=()=>{
    return(
        <div>
              <section className="linkBlock">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <div className="link__item">
                            <p>Show</p>
                            <div className="dropdown show" id="dd">
                                <Link className="btn dropdown-toggle link__btn" href="#" role="button" id="dropdownMenuLink"
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
                    <div className="col-6 d-flex align-items">
                        <div className="link__item ml-auto">
                            <div className="dropdown show ">
                                <Link className="btn dropdown-toggle sort__btn" href="#" role="button" id="dropdownMenuLink"
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
                        <div className="products__filter">
                            <h4> Filter</h4>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10">
                        <div className="site__headline ">
                            <p> All our products</p>
                        </div>
                    </div>
                </div>
             
                   <div className="catalog">
                   <div className="products__side-bar">
                            <div className="products__side-barItem">
                                <hr/>
                                <div className="products__side-barText">
                                    <p>Size</p>
                                    <img src="images/svg/Vector (7).svg" alt=""/>
                                </div>
                                <ul className="products__side-barItemMenu">
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">34</span></label>
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                    <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                </ul>
                            </div>
                            <div className="products__side-barItem">
                                <hr/>
                                <div className="products__side-barText">
                                    <p>Colour</p>
                                  
                                </div>
                                <ul className="products__side-barItemMenu">
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                </ul>
                            </div>
                            <div className="products__side-barItem">
                                <hr/>
                                <div className="products__side-barText">
                                    <p>Style</p>
                                   
                                </div>
                                <ul className="products__side-barItemMenu">
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                <label><input type="checkbox" className="checkbox"/><span className="fake"></span><span className="check__text">36</span></label>
                                </ul>
                            </div>
                            <div className="products__btn">
                                <button>Apply</button>
                            </div>
                        </div>
                  
                    <div className="catalog__list">
                   
                        <div className="style__item">
                            <img src="images/Mask.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-4.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-2.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-3.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-4.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-5.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="style__item">
                            <img src="images/Mask-2.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                 
                    
                        <div className="style__item">
                            <img src="images/Mask.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                 
                    
                        <div className=" style__item">
                            <img src="images/Mask-3.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                   
                 
                        <div className=" style__item">
                            <img src="images/Mask-5.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className=" style__item">
                            <img src="images/Mask-2.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className=" style__item">
                            <img src="images/Mask-4.png" alt=""/>
                            <h4>Shake It Off Embellished</h4>
                            <p>MINI DRESS</p>
                            <h5>€61.17</h5>
                            <div className="style__btn">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example" className="products__paginaion">
                            <ul className="pagination">
                              <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Previous">
                                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                                  <span className="sr-only">Previous</span>
                               </Link>
                              </li>
                              <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                              <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                              <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                              <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Next">
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
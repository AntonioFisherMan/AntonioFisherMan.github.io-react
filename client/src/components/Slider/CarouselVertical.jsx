import React from 'react'
import { Link } from 'react-router-dom'


export const CarouselVertical = ({ photos }) => {
        return (
                <div id="multiCarousel_3" className="carousel slide w-100" data-ride="carousel">
                        <div className="carousel-inner-2 w-100" role="listbox">
                                <div className="carousel-item active">
                                        <img className="carousel__img" src="/images/photo4.png" alt="" />
                                </div>
                                {photos.small.map(photo =>
                                        <div key={photo._id} className="carousel-item">
                                                <img className="carousel__img" src={photo} alt="" />
                                        </div>)}
                        </div>
                        <Link id="arrow-prev1" to="#" href="#multiCarousel_3" role="button" data-slide="prev">
                                <div className="arrow-1">
                                        <i className="big fas fa-chevron-up" aria-hidden="true"></i>
                                        <i className="smallLeft fas fa-chevron-left" aria-hidden="true"></i>
                                        <span className="sr-only">Предыдущий</span>
                                </div>
                        </Link>

                        <Link id="arrow-next1" to="#" href="#multiCarousel_3" role="button"
                                data-slide="next">
                                <div className="arrow-1">
                                        <i className="big fas fa-chevron-down" aria-hidden="true"></i>
                                        <i className="smallRight fas fa-chevron-right" aria-hidden="true"></i>
                                        <span className="sr-only">Cледующий</span>
                                </div>
                        </Link>
                </div>
        )
}

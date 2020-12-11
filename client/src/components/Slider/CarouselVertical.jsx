import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Hidden } from '@material-ui/core'
export const CarouselVertical = ({ photos }) => {
        return (
                <div id="multiCarousel_3" className="carousel slide w-100" data-ride="carousel">
                        <a to="#" href="#multiCarousel_3" className="smallNext" role="button" data-slide="prev">
                                <Hidden smDown>
                                        <ExpandLessIcon />
                                </Hidden>
                                <Hidden mdUp>
                                        <ChevronLeftIcon />
                                </Hidden>
                        </a>
                        <div className="carousel-inner-2" role="listbox">
                                <div className="carousel-item active">
                                        <img className="carousel__img" src="/images/photo4.png" alt="" />
                                </div>
                                {photos.small.map(photo =>
                                        <div key={photo._id} className="carousel-item">
                                                <img className="carousel__img" src={photo} alt="" />
                                        </div>)}
                        </div>
                        <a to="#" className="smallPrev" href="#multiCarousel_3" role="button" data-slide="next">
                                <Hidden smDown>
                                        <ExpandMoreIcon />
                                </Hidden>
                                <Hidden mdUp>
                                        <NavigateNextIcon />
                                </Hidden>
                        </a>
                </div>
        )
}

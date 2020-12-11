import React from 'react'
import { MyFab } from '../SiteButton/MyFab'
import './Slider.css'
import SliderItem2 from './SliderItem2/SliderItem2'
import sliderSettings from './sliderSettings'

class Slider2 extends React.Component {
    componentDidMount() {
        sliderSettings()
    }
    render() {
        return (
            <div id={this.props.id} className="carousel slide w-100" data-ride="carousel">
                <div className="carousel-inner w-100" role="listbox">
                    <div className="carousel-item active">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3  gallery__item">
                            <SliderItem2 img="/images/Mask-8.png" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-sm-6 col-md-4  col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-9.png" />
                        </div>
                    </div>
                    <div className=" carousel-item ">
                        <div className="col-12 col-sm-6 col-md-4  col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-7.png" />
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="col-12 col-sm-6 col-md-4  col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-9.png" />
                        </div>
                    </div>
                    <div className=" carousel-item ">
                        <div className="col-12 col-sm-6 col-md-4  col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-8.png" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-7.png" />
                        </div>
                    </div>
                    <div className=" carousel-item ">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 gallery__item">
                            <SliderItem2 img="/images/Mask-6.png" />
                        </div>
                    </div>
                </div>
                <a className="prev" href={this.props.a} role="button" data-slide="prev">
                    <MyFab side="left" />
                </a>
                <a className="next" href={this.props.a} role="button" data-slide="next">
                    <MyFab side="right" />
                </a>
            </div>
        )
    }
}
export default Slider2

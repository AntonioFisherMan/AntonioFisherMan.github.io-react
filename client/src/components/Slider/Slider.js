import React from "react";
import './Slider.css';
import SliderItem from './SliderItem/SliderItem';

const Slider = (props) => {
  return (
    <div
      id={props.id}
      className="carousel slide w-100"
      data-ride="carousel"
    >
      <div className="carousel-inner w-100" role="listbox">
        <div className="carousel-item active">
          <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
        <div className="carousel-item">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
        <div className=" carousel-item ">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
        <div className="carousel-item ">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
        <div className=" carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
     
        <div className=" carousel-item ">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
        <div className=" carousel-item ">
        <SliderItem 
          img="images/Mask.png"
          headline="Shake It Off Embellished"
          text="MINI DRESS"
          price="€61.17"
          />
        </div>
      </div>
    
      <a
        className="carousel-control-prev"
        href={props.a}
        id="arrow-prev"
        role="button"
        data-slide="prev"
      >
        <div className="arrow">
          <i
            className="carousel-control-prev-icon fas fa-chevron-left"
            aria-hidden="true"
          ></i>
          <span className="sr-only">Предыдущий</span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href={props.a}
        id="arrow-next"
        role="button"
        data-slide="next"
      >
        <div className="arrow">
          <i
            className="carousel-control-next-icon fas fa-chevron-right"
            aria-hidden="true"
          ></i>

          <span className="sr-only">Cледующий</span>
        </div>
      </a>
    </div>
  );
};

export default Slider;

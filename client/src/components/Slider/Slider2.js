import React from "react";
import './Slider.css';
import SliderItem2 from './SliderItem2/SliderItem2';

const Slider2 = (props) => {
  return (
    <div
      id={props.id}
      className="carousel slide w-100"
      data-ride="carousel"
    >
      <div className="carousel-inner w-100" role="listbox">
        <div className="carousel-item active">
          <SliderItem2 
          img="images/Mask-6.png"
          />
        </div>
        <div className="carousel-item">
        <SliderItem2 
           img="images/Mask-7.png"
          />
        </div>
        <div className=" carousel-item ">
        <SliderItem2 
          img="images/Mask-8.png"
          />
        </div>
        <div className="carousel-item ">
        <SliderItem2 
          img="images/Mask-9.png"
          />
        </div>
        <div className=" carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
        <SliderItem2
          img="images/Mask-10.png"
          />
        </div>
     
        <div className=" carousel-item ">
        <SliderItem2 
          img="images/Mask-6.png"
          />
        </div>
        <div className=" carousel-item ">
        <SliderItem2 
          img="images/Mask-7.png"
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
export default Slider2;

import React from 'react'


class SamuraiSlider extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div
              className="carousel slide w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner w-100" role="listbox">
                <div className="carousel-item active">
                <img src="images/Mask-10.png"/>
                </div>
                <div className="carousel-item">
                    <img src="images/Mask-10.png"/>
                </div>
              </div>
            
              <a
                className="carousel-control-prev"
                href="carousel"
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
                href="carousel"
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
    }
}

export default SamuraiSlider
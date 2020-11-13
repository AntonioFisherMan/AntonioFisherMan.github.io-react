import React from 'react'
import './Slider.css'
import SliderItem from './SliderItem/SliderItem'
import sliderSettings from './sliderSettings'
import { connect } from 'react-redux'
import { getGoodsForSlider } from '../../redux/reducers/CatalogReducer'
import { catalogActions } from '../../redux/reducers/CatalogReducer'
import { AppStateType } from '../../redux/ReduxStore'
import { GoodType } from '../../types/types'
import { MyFab } from '../SiteButton/MyFab'

class Slider extends React.Component<SliderPropsTypes & PropsTypes> {
    componentWillUnmount() {
        this.props.clearGoods()
    }
    componentDidMount() {
        this.props.getGoodsForSlider()
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps != this.props) {
            sliderSettings()
        }
    }
    render() {
        return (
            <div>
                {this.props.goods.length > 0 ? (
                    <div id={this.props.id} className="carousel slide w-100" data-ride="carousel">
                        <div className="carousel-inner w-100" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3  style__item">
                                    <SliderItem
                                        img="/images/Mask-3.png"
                                        headline="Shake It Off Embellished"
                                        text="BOTTOMS"
                                        price="112"
                                        id={this.props.goods[0]._id}
                                    />
                                </div>
                            </div>
                            {this.props.goods.map((good: GoodType) => (
                                <div className="carousel-item" key={good._id}>
                                    <div className="col-12 col-sm-6 col-md-4  col-lg-3 style__item">
                                        <SliderItem
                                            img={good.photos.middle}
                                            headline={good.text}
                                            text={good.style}
                                            price={good.price}
                                            id={good._id}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href={this.props.a} id="arrow-prev" role="button" data-slide="prev">
                            <div className="arrow">
                                <i className="carousel-control-prev-icon fas fa-chevron-left" aria-hidden="true"></i>
                                <span className="sr-only">Предыдущий</span>
                            </div>
                        </a>

                        <a className="carousel-control-next" href={this.props.a} id="arrow-next" role="button" data-slide="next">
                            <div className="arrow">
                                <i className="carousel-control-next-icon fas fa-chevron-right" aria-hidden="true"></i>

                                <span className="sr-only">Cледующий</span>
                            </div>
                        </a>
                    </div>
                ) : null}
            </div>
        )
    }
}
type PropsTypes = {
    id: string,
    a: string
}
type mapStateToPropsType = {
    goods: Array<GoodType>
}
type mapDispatchToPropsType = {
    getGoodsForSlider: () => void,
    clearGoods: () => void
}

type SliderPropsTypes = mapDispatchToPropsType & mapStateToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        goods: state.goods.goods
    }
}

export default connect(mapStateToProps, { getGoodsForSlider, ...catalogActions })(Slider)

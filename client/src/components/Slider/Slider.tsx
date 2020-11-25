import React from 'react'
import './Slider.css'
import SliderItem from './SliderItem/SliderItem'
import sliderSettings from './sliderSettings'
import { connect } from 'react-redux'
import { getGoodsForSlider } from '../../redux/reducers/CatalogReducer'
import { catalogActions } from '../../redux/reducers/CatalogReducer'
import { AppStateType } from '../../redux/ReduxStore'
import { GoodType } from '../../types/types'
import { Box } from '@material-ui/core'
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
            <>
                {this.props.goods.length > 0 ? (
                    <Box id={this.props.id} className="carousel slide w-100" data-ride="carousel">
                        <a className="prev" href={this.props.a} role="button" data-slide="prev">
                            <MyFab side="left" />
                        </a>
                        <Box className="carousel-inner w-100" role="listbox">
                            <Box className="carousel-item active">
                                <Box className="col-12 col-sm-6 col-md-4 col-lg-3  style__item">
                                    <SliderItem
                                        img="/images/Mask-3.png"
                                        headline="Shake It Off Embellished"
                                        text="BOTTOMS"
                                        price="112"
                                        id={this.props.goods[0]._id}
                                    />
                                </Box>
                            </Box>
                            {this.props.goods.map((good: GoodType) => (
                                <Box className="carousel-item" key={good._id}>
                                    <Box className="col-12 col-sm-6 col-md-4  col-lg-3 style__item">
                                        <SliderItem
                                            img={good.photos.middle}
                                            headline={good.text}
                                            text={good.style}
                                            price={good.price}
                                            id={good._id}
                                        />
                                    </Box>
                                </Box>
                            ))}
                            <a className="next" href={this.props.a} role="button" data-slide="next">
                                <MyFab side="right" />
                            </a>
                        </Box>
                    </Box>
                ) : null}
            </>
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

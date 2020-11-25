import React from 'react'
import { connect } from 'react-redux'
import { mongoObjectId } from '../../utils/helperFunctions/objectId'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import Preloader from '../../common/Preloader'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../hoc/LoaingData'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import { colors } from '../../constants/colors'
import { AppStateType } from '../../redux/ReduxStore'

const useStyles = makeStyles({
    box: {
        height: 500,
        color: 'white',
        background: colors.PINK,
        padding: '10px 10px'
    }
})

const Order: React.FC<Props> = (props) => {
    const classes = useStyles()
    return (
        <>
            {props.order ? <>
                <Container>
                    <Grid container>
                        <Box className={classes.box}>
                            <div><h1>Заказ: {mongoObjectId()}</h1><p style={{ color: 'black' }}>статус: processing</p></div>
                            <h2>покупатель: {props.order.name}</h2>
                            <h3>Адрес: {props.order.city}</h3>
                            <h4>Телефон:{props.order.phone}</h4>
                            <p style={{ color: "#D2691E", fontSize: '16px', marginTop: '20px' }}>В ближайшее время с Вами свяжется наш менеджер</p>
                        </Box>
                    </Grid>
                    <Grid container justify="center">
                        <MyButton text="to catalog" href="/catalog" variant="outlined" />
                    </Grid>
                </Container>
            </> : <Preloader loading={props.loading} />}
        </>
    )
}

type Props = {
    order: { name: string, city: string, phone: string },
    loading: boolean
}

let mapDispatchToProps = (state: AppStateType) => {
    return {
        order: state.orders.unloginOrder
    }
}

export default compose(LoadingDataHOC, connect(mapDispatchToProps, {}))(Order)
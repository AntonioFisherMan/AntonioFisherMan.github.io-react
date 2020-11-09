import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { initializeThunkApp } from './redux/reducers/AppReducer'
import { connect } from 'react-redux'

//PAGES

import ChangepassPage from './components/Pages/ChangepassPage/ChangepassPage'
import CheckoutPage from './components/Pages/CheckoutPage/CheckoutPage'
import HelpPage from './components/Pages/HelpPage/HelpPage'
import ReturnPage from './components/Pages/ReturnPage/ReturnPage'
import NavContainer from './components/Nav/NavContainer'
import CatalogPageContainer from './components/Pages/CatalogPage/CatalogPageContainer'
import SignPage from './components/Pages/SignPage/SignPage'
import Preloader from './components/common/Preloader'
import FrontPage from './components/Pages/FrontPage/FrontPage'
import CardPageContainer from './components/Pages/CardPage/CardPageContainer'
import FeedbackContainer from './components/Pages/FeedbackPage/FeedbackContainer'
import OrdersPageContainer from './components/Pages/OrdersPage/OrdersPageContainer'
import Checkout from './components/Forms/Checkout/Checkout'
import Order from './components/Pages/OrdersPage/UnloginOrderPage'
import InformContainer from './components/Pages/InformPage/InformContainer'
import ForgotChangePassword from './components/Forms/ForgotPassword/ForgotChangePassword'
import ForgotPassword from './components/Forms/ForgotPassword/ForgotPassword'
import DetailsContainer from './components/Pages/DetailsPage/DetailsContainer'
import Test2 from './components/Pages/Test2'
// const DetailsContainer = React.lazy(() =>
// import("./components/Pages/DetailsPage/DetailsContainer")
// );
// const FrontPage = React.lazy(() =>
//   import('../src/components/Pages/FrontPage/FrontPage')
// );

import Modal from './components/common/Modal/Modal'
import NotFound from './components/Pages/NotFound/NotFound'
import FooterContainer from './components/Footer/FooterContainer'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { font } from './fonts/Montserrat/font'
import Test from './components/Pages/Test'
import ServerMessage from './components/common/ServerMessages/ServerMessage'
const userr="sdfsdf"
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffafb2',
            main: '#e77e83',
            dark: '#b24f56',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#e77e83',
        },
        default: {
            light: '#373737',
            main: '#111111',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        color: {
            white: '#fff',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        caption: {
            fontWeight: 300,
            fontSize: '3.125rem',
        },
        h6: {
            fontWeight: 600,
            fontSize: '15px',
        },
        h5: {
            fontWeight: 700,
            fontSize: '20px',
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '24px',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [font],
            },
        },
    },
})
class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunkApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        } else {
            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <NavContainer />
                            <ServerMessage code={this.props.code} />
                            <Switch>
                                <Route exact path="/" component={FrontPage} />
                                <Route path="/catalog" component={CatalogPageContainer} />
                                <Route path="/details/:id?" component={DetailsContainer} />
                                <Route path="/card" component={CardPageContainer} />
                                <Route path="/changepass" component={ChangepassPage} />
                                <Route path="/checkout" component={CheckoutPage} />
                                <Route path="/feedback/:id?" component={FeedbackContainer} />
                                <Route path="/help" component={HelpPage} />
                                <Route path="/inform" component={InformContainer} />
                                <Route path="/orders" component={OrdersPageContainer} />
                                <Route path="/return" component={ReturnPage} />
                                <Route path="/sign" component={SignPage} />
                                <Route path="/forgotpassword" component={ForgotPassword} />
                                <Route path="/forgotchangepass/:token?" component={ForgotChangePassword} />
                                <Route path="/buy" component={Checkout} />
                                <Route path="/order" component={Order} />
                                <Route path="/test" component={Test} />
                                <Route path="/test2" component={Test2} />
                                <Route component={NotFound} />
                            </Switch>
                            <Modal />

                            <FooterContainer />
                        </Suspense>
                    </Router>
                </ThemeProvider>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.initialized,
        code: state.messages.code,
    }
}

export default connect(mapStateToProps, { initializeThunkApp })(App)

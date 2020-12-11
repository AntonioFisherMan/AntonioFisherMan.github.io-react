import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { compose } from 'redux'
import { connect } from 'react-redux'

import { ThemeProvider } from '@material-ui/core'
import DateUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
//PAGES
import ChangepassPage from './pages/ChangepassPage/ChangepassPage'
import HelpPage from './pages/HelpPage/HelpPage'
import ReturnPage from './pages/ReturnPage/ReturnPage'
import NavContainer from './components/Nav/NavContainer'
import CatalogPageContainer from './pages/CatalogPage/CatalogPageContainer'
import SignPage from './pages/SignPage/SignPage'
import Preloader from './common/Preloader'
import FrontPage from './pages/FrontPage/FrontPage'
import CardPageContainer from './pages/CardPage/CardPageContainer'
import FeedbackContainer from './pages/FeedbackPage/FeedbackContainer'
import OrdersPageContainer from './pages/OrdersPage/OrdersPageContainer'
import Order from './pages/OrdersPage/UnloginOrderPage'
import InformContainer from './pages/InformPage/InformContainer'
import ForgotChangePassword from './components/Forms/ForgotPassword/ForgotChangePassword'
import ForgotPassword from './components/Forms/ForgotPassword/ForgotPassword'
import DetailsContainer from './pages/DetailsPage/DetailsContainer'
import NotFound from './pages/NotFound/NotFound'

import CardModal from './common/ModalWindows/CardModal'
import FooterContainer from './components/Footer/FooterContainer'
import { initializeThunkApp } from './redux/reducers/AppReducer'
import ServerMessage from './common/Messages/ServerMessage'
import CheckoutPageContainer from './pages/CheckoutPage/CheckoutPageContainer'
import { LoadingDataHOC } from './hoc/LoadingData'
import { theme } from './materialUi/theme'
import { SiteWindow } from './common/ModalWindows/SiteWindow'

class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunkApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader loading={this.props.loading} />
        } else {
            return (
                <MuiPickersUtilsProvider utils={DateUtils}>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <Suspense fallback={<div>Загрузка...</div>}>
                                <NavContainer />
                                <ServerMessage code={this.props.code} />
                                <Switch>
                                    <Route exact path="/" component={FrontPage} />
                                    <Route exact path="/catalog" component={CatalogPageContainer} />
                                    <Route path="/catalog/:id?" component={DetailsContainer} />
                                    <Route path="/card" component={CardPageContainer} />
                                    <Route path="/changepass" component={ChangepassPage} />
                                    <Route path="/feedback/:id?" component={FeedbackContainer} />
                                    <Route path="/help" component={HelpPage} />
                                    <Route path="/inform" component={InformContainer} />
                                    <Route path="/orders" component={OrdersPageContainer} />
                                    <Route path="/return" component={ReturnPage} />
                                    <Route path="/sign" component={SignPage} />
                                    <Route path="/forgotpassword" component={ForgotPassword} />
                                    <Route path="/forgotchangepass/:token?" component={ForgotChangePassword} />
                                    <Route path="/buy" component={CheckoutPageContainer} />
                                    <Route path="/order" component={Order} />
                                    <Route component={NotFound} />
                                </Switch>
                                <CardModal />
                                <SiteWindow />
                                <FooterContainer />
                            </Suspense>
                        </Router>
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
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

export default compose(LoadingDataHOC, connect(mapStateToProps, { initializeThunkApp }))(App)

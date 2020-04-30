import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeThunkApp } from "./redux/AppReducer";
import {connect } from "react-redux";

//PAGES

import Footer from "../src/components/Footer/Footer";
import ChangepassPage from "./components/Pages/ChangepassPage/ChangepassPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";

import HelpPage from "./components/Pages/HelpPage/HelpPage";
import InformPage from "./components/Pages/InformPage/InformPage";
import ReturnPage from "./components/Pages/ReturnPage/ReturnPage";
import NotFoundPage from "./components/Pages/404/404";
import NavContainer from "./components/Nav/NavContainer";
import CatalogPageContainer from "./components/Pages/CatalogPage/CatalogPageContainer";
import SignPage from "./components/Pages/SignPage/SignPage";
import Preloader from "./components/common/Preloader";
import FrontPage from './components/Pages/FrontPage/FrontPage'
import CardPageContainer from "./components/Pages/CardPage/CardPageContainer";
import DetailsContainer from "./components/Pages/DetailsPage/DetailsContainer";
import FeedbackContainer from "./components/Pages/FeedbackPage/FeedbackContainer";
import OrdersPageContainer from "./components/Pages/OrdersPage/OrdersPageContainer";
import Checkout from "./components/Forms/Checkout/Checkout";
const DetailsPage = React.lazy(() =>
  import("../src/components/Pages/DetailsPage/DetailsPage")
);
// const FrontPage = React.lazy(() =>
//   import('../src/components/Pages/FrontPage/FrontPage')
// );

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkApp();
  }
  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    } else {
      return (
        <Router>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
                <NavContainer>
                  <Route exact path="/" component={FrontPage} />
                  <Route  exact path="/catalog" component={CatalogPageContainer} />
                  <Route exact path="/details/:id?" component={DetailsContainer} />
                  <Route path="/card" component={CardPageContainer} />
                  <Route path="/changepass" component={ChangepassPage} />
                  <Route path="/checkout" component={CheckoutPage} />
                  <Route path="/feedback" component={FeedbackContainer} />
                  <Route path="/help" component={HelpPage} />
                  <Route path="/inform" component={InformPage} />
                  <Route path="/orders" component={OrdersPageContainer} />
                  <Route path="/return" component={ReturnPage} />
                  <Route path="/sign" component={SignPage} />
                  <Route path="/buy" component={Checkout}/>
                  <Route path="/order" component={<div>s</div>}/>
                </NavContainer>   
            </Switch>
            <Footer />    
          </Suspense>
        </Router>
      );
    }
  }
}
const mapStateToProps = (state) => {

  return {
    isInitialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeThunkApp })(App);

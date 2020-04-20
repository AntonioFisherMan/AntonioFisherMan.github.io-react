import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeThunkApp } from "./redux/AppReducer";
import {connect } from "react-redux";

//PAGES
import CardPage from "./components/Pages/CardPage/CardPage";
import Footer from "../src/components/Footer/Footer";
import ChangepassPage from "./components/Pages/ChangepassPage/ChangepassPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import FeedbackPage from "./components/Pages/FeedbackPage/FeedbackPage";
import HelpPage from "./components/Pages/HelpPage/HelpPage";
import InformPage from "./components/Pages/InformPage/InformPage";
import OrdersPage from "./components/Pages/OrdersPage/OrdersPage";
import ReturnPage from "./components/Pages/ReturnPage/ReturnPage";
import NotFoundPage from "./components/Pages/404/404";
import usersContainer from "./components/Users/UsersContainer";
import NavContainer from "./components/Nav/NavContainer";
import CatalogPageContainer from "./components/Pages/CatalogPage/CatalogPageContainer";
import SignPageContainer from "./components/Pages/SignPage/SignPageContainer";
import Preloader from "./components/common/Preloader";
import MyUsersContainer from "./components/TEST/MyUsers/MyUsersContainer";
import ProfilePage from "./components/ProfilePage/ProfileContainer";
import FrontPage from './components/Pages/FrontPage/FrontPage'
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
                  <Route path="/catalog" component={CatalogPageContainer} />
                  <Route path="/details" component={DetailsPage} />
                  <Route path="/card" component={CardPage} />
                  <Route path="/changepass" component={ChangepassPage} />
                  <Route path="/checkout" component={CheckoutPage} />
                  <Route path="/feedback" component={FeedbackPage} />
                  <Route path="/help" component={HelpPage} />
                  <Route path="/inform" component={InformPage} />
                  <Route path="/orders" component={OrdersPage} />
                  <Route path="/return" component={ReturnPage} />
                  <Route path="/sign" component={SignPageContainer} />
                  <Route path="/users/:id?" component={usersContainer} />
                  <Route path="/test" component={MyUsersContainer} />
                  <Route path="/profile/:id?" component={ProfilePage}/>
       
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

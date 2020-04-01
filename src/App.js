import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//PAGES
import FrontPage from '../src/components/Pages/FrontPage/FrontPage'
import CatalogPage from '../src/components/Pages/CatalogPage/CatalogPage'
import DetailsPage from '../src/components/Pages/DetailsPage/DetailsPage'
import CardPage from './components/Pages/CardPage/CardPage'
import Footer from '../src/components/Footer/Footer'
import ChangepassPage from './components/Pages/ChangepassPage/ChangepassPage';
import CheckoutPage from './components/Pages/CheckoutPage/CheckoutPage';
import FeedbackPage from './components/Pages/FeedbackPage/FeedbackPage';
import HelpPage from './components/Pages/HelpPage/HelpPage';
import InformPage from './components/Pages/InformPage/InformPage';
import OrdersPage from './components/Pages/OrdersPage/OrdersPage';
import ReturnPage from './components/Pages/ReturnPage/ReturnPage';
import SignPage from './components/Pages/SignPage/SignPage';
import {Provider} from 'react-redux'
import usersContainer from './components/Users/UsersContainer';
import NavContainer from './components/Nav/NavContainer';



const App=(props)=> {
  return (
    <Router>
   
   <Switch>
     <Provider store={props.store}>
        
     <NavContainer>
      <Route exact path="/" component={FrontPage}/>
      <Route  path="/catalog" component={CatalogPage}/>
      <Route  path="/details" component={DetailsPage}/>
      <Route  path="/card" component={CardPage}/>
      <Route  path="/changepass" component={ChangepassPage}/>
      <Route  path="/checkout" component={CheckoutPage}/>
      <Route  path="/feedback" component={FeedbackPage}/>
      <Route  path="/help" component={HelpPage}/>
      <Route  path="/inform" component={InformPage}/>
      <Route  path="/orders" component={OrdersPage}/>
      <Route  path="/return" component={ReturnPage}/>
      <Route  path="/sign" component={SignPage}/>
      <Route path="/users/:id?" component={usersContainer}/>
      </NavContainer>
      
      </Provider>
      </Switch>
   
    <Footer/>
    
  </Router>
  );
}

export default App;

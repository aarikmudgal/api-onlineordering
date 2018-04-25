/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from 'containers/LoginPage/Loadable';
import SignupPage from 'containers/SigninPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ArticleDetailsPage from 'containers/ArticleDetailsPage/Loadable';
import OrderDetailsPage from 'containers/OrderDetailsPage/Loadable';
import CheckoutPage from 'containers/CheckoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HealthCheckPage from 'containers/HealthCheckPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import '../../../node_modules/toastr/build/toastr.css';


const AppWrapper = styled.div`
  max-width: calc(1000px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Online Ordering"
        defaultTitle="Online Ordering"
      >
        <meta name="description" content="Online Ordering application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/signin" component={LoginPage} />
        <Route path="/articleDetails" component={ArticleDetailsPage} />
        <Route path="/orderDetails" component={OrderDetailsPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/health" component={HealthCheckPage} />
        <Route path="/signup" component={SignupPage}/>
        <Redirect from="/" to="/signin" />
        <Route path="" component={NotFoundPage} />
      </Switch>
      
    </AppWrapper>
  );
}

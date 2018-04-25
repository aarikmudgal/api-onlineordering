/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl'
import Profilepanel from '../App/shared/Profilepanel';;
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import './Login.css';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
//import Input from './Input';
import Section from './Section';
import messages from './messages';
import { checkoutDetails } from '../CheckoutPage/actions';
import { changeUsername } from './actions';
import { makeSelectCheckoutDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Input, Button, Profile, ProfilePicture, ProfileDropdown, Description } from 'metro-ui-components';
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Header from 'components/Header';
import axios from 'axios';
const urlContants = require('../App/appconstants/urlConstants');

const styles = {

};
export class CheckoutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone: '',
      expiry: '',
      cvc: '',
      email: '',
      cardno: ''
    }
  }
  componentDidMount() {

  }
  handleAddItemsToCart(e) {
    let me = this;
    me.props.history.push('/articleDetails');
  }
  isEmpty(str) {
    if (!str || !str.trim().length > 0) {
      return true;
    }
    return false;
  }
  validateData() {
    let isValid = false;
    if (!this.isEmpty(this.state.name) && !this.isEmpty(this.state.email) && !this.isEmpty(this.state.address) && !this.isEmpty(this.state.phone) && !this.isEmpty(this.state.expiry) && !this.isEmpty(this.state.cvc) && !this.isEmpty(this.state.cardno)) {
      isValid = true;
    }

    this.setState({
      nameError: this.isEmpty(this.state.name) ? 'Name is required' : '',
      cardError: this.isEmpty(this.state.cardno) ? 'Long number on the back of your card ' : '',
      cvcError: this.isEmpty(this.state.cvc) ? 'Three digits located on the back of your card' : '',
      phoneError: this.isEmpty(this.state.phone) ? 'Phone No is required' : '',
      addressError: this.isEmpty(this.state.address) ? 'Address is required' : '',
      emailError: this.isEmpty(this.state.email) ? 'Email Id is required' : '',
      expiryError: this.isEmpty(this.state.expiry) ? 'Expiry Date is required' : '',
    })
    return isValid;
  }
  onPayClick(e) {
    debugger
    //this.props.customerLogin(this.state.username, this.state.password);
    e.preventDefault();
    this.validateData()
  }
  onNameChange(e) {
    this.setState({ name: e.target.value })
  }
  onPhoneChange(e) {
    this.setState({ phone: e.target.value })
  }
  onCardChange(e) {
    this.setState({ cardno: e.target.value })
  }
  onCvcChange(e) {
    this.setState({ cvc: e.target.value })
  }
  onExpiryChange(e) {
    this.setState({ expiry: e.target.value })
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  onAddressChange(e) {
    this.setState({ address: e.target.value })
  }
  onCartClick(e) {
    e.preventDefault();
    let me = this;
    me.props.history.push('/orderDetails');
  }
  handleBackClick(e) {
    let me = this;
    me.props.history.push('/orderDetails');
  }
  deleteAllCookies() {
    debugger
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(true)
    this.deleteAllCookies();
    let me = this;
    me.props.history.push('/');
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div>
        <h1 className='headline'>Checkout</h1>
        <Card id="acard" style={{ margin: '20px', padding: '10px', height: '100%' }}>
          <h2 style={{ color: 'green' }}>Your order has been successfully placed!</h2>
          <h2 style={{ color: 'green' }}>Order Id: {window.sessionStorage.getItem('OrderId') }</h2>
          <div style={{ marginLeft: '380px', marginTop: '50px', marginBottom: '50px' }}>
            <Button kind="primaryRaised" onClick={this.handleAddItemsToCart.bind(this) }>
              Continue Shopping
            </Button>
          </div>
        </Card>
      </div>

    )
  }
}

CheckoutPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  details: PropTypes.func,
  status: PropTypes.bool
};



export function mapDispatchToProps(dispatch) {
  return {
    details: () => {
      //if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch();
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  status: makeSelectCheckoutDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'checkoutdetails', reducer });
const withSaga = injectSaga({ key: 'checkoutdetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CheckoutPage);

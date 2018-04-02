/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
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
      email:'',
      cardno:''
    }
  }
  componentDidMount() {
    
  }
  isEmpty(str) {
    if (!str || !str.trim().length > 0) {
      return true;
    }
    return false;
  }
  validateData() {
    let isValid = false;
    if(!this.isEmpty(this.state.name) && !this.isEmpty(this.state.email)&& !this.isEmpty(this.state.address)&&!this.isEmpty(this.state.phone)&& !this.isEmpty(this.state.expiry)&& !this.isEmpty(this.state.cvc)&& !this.isEmpty(this.state.cardno)){
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
  handleBackClick(e){
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
        <div>
          <Profile>
            <img style={{marginRight:'10px'}}src={require("./back.png")} onClick={this.handleBackClick.bind(this)}/>
            <ProfilePicture />
            <Profile.Content title={window.sessionStorage.getItem('CustomerName')}>
            </Profile.Content>
            <Profile.Buttons>
              <span style={{ color: '#1a3b7c', fontSize: 'larger' }}>Items:</span>
              <input style={{ color: '#1a3b7c', width: '30px' }} name='counter' id='cartcounter' type='number'
                value={window.sessionStorage.getItem('cartItemsCount')} />
              <img src={require("./shopping-cart.png")} onClick={this.onCartClick.bind(this)} />
              <div style={{ marginLeft: '50px' }}>
                <a href="#" onClick={this.logout.bind(this)}><img src={require("./logout.png")} /></a>
              </div>
            </Profile.Buttons>
          </Profile>
        </div>
        <Card style={{ margin: '20px' }}>
          <h1 className='headline'>Checkout</h1>
          <img style={{ marginLeft: '25%',width:'50%',height:'50%' }}src={require("./checkout.png")} />
         
          <div style={{ borderBottom: '1px solid rgb(238, 238, 238)', padding: '100px', marginBottom: '10px'}}>
            <h1 className='hl'>Add Customer Details</h1>
            <Input.Text
              TagName="input"
              id="name"
              inputClassName="extra-class-on-input-tag"
              label="Name"
              name="name"
              placeholder="John Doe"
              required={true}
              type="text"
              errorMessage={this.state.nameError}
              value={this.state.name}
              onChange={this.onNameChange.bind(this) }
            />
            <Input.Email
              TagName="input"
              hasWarning={false}
              id="email"
              inputClassName="extra-class-on-input-tag"
              label="Email"
              name="email"
              required={true}
              type="email"
              errorMessage={this.state.emailError}
              value={this.state.email}
              placeholder="john@example.com"
              onChange={this.onEmailChange.bind(this) }
            />
            <Input.Tel
              TagName="input"
              id="phone"
              inputClassName="extra-class-on-input-tag"
              label="Phone"
              name="phone"
              errorMessage={this.state.phoneError}
              placeholder="+44 207 123 4567"
              required={true}
              value={this.state.phone}
              type="tel"
              onChange={this.onPhoneChange.bind(this) }
            />
            <Input.Tel
              TagName="input"
              id="cardno "
              inputClassName="extra-class-on-input-tag"
              label="Card Number"
              name="phone"
              errorMessage={this.state.cardError}
              placeholder="1234 5678 9102 2457"
              required={true}
              type="tel"
              value={this.state.cardno}
              onChange={this.onCardChange.bind(this) }
            />
            <Input.Tel
              TagName="input"
              id="cvc "
              errorMessage={this.state.cvcError}
              inputClassName="extra-class-on-input-tag"
              label="CVC"
              name="cvc"
              placeholder="123"
              required={true}
              errorMessage={this.state.cvcError}
              type="tel"
              value={this.state.cvc}
              onChange={this.onCvcChange.bind(this) }
            />
            <Input.Date
              TagName="input"
              id="ExpDate "
              inputClassName="extra-class-on-input-tag"
              label="Expiry"
              name="Expiry"
              placeholder="10/17"
              errorMessage={this.state.expiryError}
              required={true}
              type="text"
              value={this.state.expiry}
              onChange={this.onExpiryChange.bind(this) }
            />
            <Input.TextArea
              TagName="textarea"
              id="address "
              inputClassName="extra-class-on-input-tag"
              label="Address"
              name="address"
              errorMessage={this.state.addressError}
              placeholder="1 Chapel hill,heswal,BOURNEMOUTH,UK,BH 1AA"
              required={true}
              type="text"
              value={this.state.address}
              onChange={this.onAddressChange.bind(this) }
            />
            <Button
            kind="primaryRaised"
            size="large"
            block
            colorOverride="dark-blue"
            onClick={this.onPayClick.bind(this)}
          >
            Pay  (Grand Total  €{ window.sessionStorage.getItem('OrderTotalPrice')})
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

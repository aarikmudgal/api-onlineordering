/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
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
import { customerAuthenticate } from './actions';
//import { changeUsername } from './actions';
import { makeSelectLoginStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Input, Button } from 'metro-ui-components';
import './Login.css';

import toastr from '../App/shared/AppToastr';

const loginStatus = require('../App/appconstants/loginStatus');
const urlContants = require('../App/appconstants/urlConstants');

import axios from 'axios'

export class SigninPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmpassword:'',
      status: '',
      firstnameerror: '',
      lastnameerror: '',
      usernameError: '',
      passwordError: '',
      confirmpasswordError:'',
       open: false
    }
  }
  handleRequestClose() {
    this.setState({
      open: false,
    })
  };
  isEmpty(str) {
    if (!str || !str.trim().length > 0) {
      return true;
    }
    return false;
  }
  validateData() {
    let isValid = false;
    if (!this.isEmpty(this.state.firstname) && !this.isEmpty(this.state.lastname) && !this.isEmpty(this.state.username) && !this.isEmpty(this.state.password)&& !this.isEmpty(this.state.confirmpassword)) {
      isValid = true;
    }

    this.setState({
      firstnameerror: this.isEmpty(this.state.firstname) ? 'FirstName is required' : '',
      lastnameerror: this.isEmpty(this.state.lastname) ? 'LastName is required' : '',
      usernameError: this.isEmpty(this.state.username) ? 'Username is required' : '',
      passwordError: this.isEmpty(this.state.password) ? 'Password is required' : '',
      confirmpasswordError:this.isEmpty(this.state.confirmpassword) ? 'Password doesn not match' : ''
    })
    return isValid;
  }

  onSignClick(e) {
    //this.props.customerLogin(this.state.username, this.state.password);
    e.preventDefault();
    if (this.validateData()) {
      let me = this;
      const userData = {
        firstName:this.state.firstname,
        lastName:this.state.lastname,
        userName: this.state.username,
        password: this.state.password,
        confirmpassword:this.state.confirmpassword
      }
      axios.post(urlContants.signin,
        JSON.stringify(userData), {
          headers: {
            'Content-Type': 'application/json',
          }
        },
      )
        .then(function (response) {
          debugger
          let status = response.status === 200 ? loginStatus.SIGNIN_SUCCESS : loginStatus.SIGNIN_FAILED;
          me.setState({ status: status });
          me.setState({ open: true })
          me.setState({firstname: '',lastname: '',username: '',password: '',confirmpassword:''})
        })
        .catch(function (error) {
          me.setState({ status: loginStatus.SIGNIN_FAILED });
          me.setState({ passwordError: 'Signin failed' });
        });
    }

  }
  handleCreateAccount() {
    let me = this;
    me.props.history.push('/');
  }
  onFirstNameChange(e) {
    this.setState({ firstname: e.target.value })
  }
  onLastNameChange(e) {
    this.setState({ lastname: e.target.value })
  }
  onUserNameChange(e) {
    this.setState({ username: e.target.value })
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }
  onConfirmPasswordChange(e) {
    this.setState({ confirmpassword: e.target.value })
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (<div className='intro-header'>
      <h1 className='headline  fade-in'>Sign in to Online Ordering</h1>
      <Card className="w" style={{ marginLeft: '100px', marginTop: '20px', marginBottom: '100px', marginRight: '100px' }}>

        <div style={{ borderBottom: '1px solid rgb(238, 238, 238)', padding: '100px' }}>
          <Input
            id="fname"
            type="text"
            label="First Name"
            name="fname"
            placeholder="First Name"
            required={true}
            errorMessage={this.state.firstnameerror}
            inputClassName="extra-class-on-input-tag"
            value={this.state.firstname}
            onChange={this.onFirstNameChange.bind(this)}
          />
          <Input
            id="lname"
            type="text"
            label="Last Name"
            name="lname"
            placeholder="Last Name"
            required={true}
            errorMessage={this.state.lastnameerror}
            inputClassName="extra-class-on-input-tag"
            value={this.state.lastname}
            onChange={this.onLastNameChange.bind(this)}
          />
          <Input
            id="custid"
            type="text"
            label="User Name" 
            name="name"
            placeholder="User Name"
            required={true} 
            errorMessage={this.state.usernameError}
            inputClassName="extra-class-on-input-tag"
            value={this.state.username}
            onChange={this.onUserNameChange.bind(this)}
          />
          <Input.Password
            id="password"
            type="password"
            label="Password"
            name="name"
            placeholder="Password"
            required={true}
            errorMessage={this.state.passwordError}
            inputClassName="extra-class-on-input-tag"
            value={this.state.password}
            onChange={this.onPasswordChange.bind(this)}
          />
          <Input.Password
            id="confirmpassword"
            type="password"
            label="Confirm Password"
            name="name"
            placeholder="Confirm Password"
            required={true}
            errorMessage={this.state.confirmpasswordError}
            inputClassName="extra-class-on-input-tag"
            value={this.state.confirmpassword}
            onChange={this.onConfirmPasswordChange.bind(this)}
          />
          <div style={{ marginTop: '50px' }}>
            <Button
              TagName="button" 
              block={true}
              disabled={false}
              kind="primaryRaised"
              type="button"
              waiting={false}
              colorOverride="dark-blue"
              onClick={this.onSignClick.bind(this)}
            >
              Sign Up
            </Button>
            <p style={{ textAlign: 'center' }}>Already a user?<a href="" style={{ fontSize: 'larger', color: 'black' }} onClick={this.handleCreateAccount.bind(this)}>Login</a></p>
          </div>
        </div>
      </Card>
      <Snackbar
          open={this.state.open}
          message="Customer added successfully"
          autoHideDuration={4000}
          onClose={this.handleRequestClose.bind(this)}
        />
    </div>

    );
  }
}

SigninPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  customerLogin: PropTypes.func,
  //status: PropTypes.string
};



export function mapDispatchToProps(dispatch) {
  return {
    customerLogin: (username, password) => {

      //if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(customerAuthenticate(username, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  status: makeSelectLoginStatus(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SigninPage);
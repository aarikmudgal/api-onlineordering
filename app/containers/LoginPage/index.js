/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

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
import {Input, Button} from 'metro-ui-components';
import './Login.css';

import toastr from '../App/shared/AppToastr';

const loginStatus = require('../App/appconstants/loginStatus');
const urlContants = require('../App/appconstants/urlConstants');

import axios from 'axios'

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      status: '',
      usernameError: '',
      passwordError: ''
    }
  }
  isEmpty(str) {
    if (!str || !str.trim().length > 0) {
      return true;
    }
    return false;
  }
  validateData() {
    let isValid = false;
    if(!this.isEmpty(this.state.username) && !this.isEmpty(this.state.password)){
      isValid = true;
    }

    this.setState({
      usernameError: this.isEmpty(this.state.username) ? 'Username is required' : '',
      passwordError: this.isEmpty(this.state.password) ? 'Password is required' : '',
    })
    return isValid;
  }

  onLoginClick(e) {
    //this.props.customerLogin(this.state.username, this.state.password);
    e.preventDefault();
    if (this.validateData()) {
      let me = this;
      const userData = {
        userName: this.state.username,
        password: this.state.password
      }
      axios.post(urlContants.login,
        JSON.stringify(userData), {
          headers: {
            'Content-Type': 'application/json',
          }
        },
      )
        .then(function (response) {
          debugger;
          let status = response.status === 200 ? loginStatus.LOGIN_SUCCESS : loginStatus.LOGIN_FAILED;
          me.setState({ status: status });
          console.log(response);
          window.sessionStorage.setItem('CustomerId', response.data.Customer.CustomerId);
          window.sessionStorage.setItem('CustomerName', response.data.Customer.FirstName+" "+response.data.Customer.LastName);
         window.sessionStorage.getItem('cartItemsCount')
          me.props.history.push('/articleDetails');
        })
        .catch(function (error) {
          me.setState({ status: loginStatus.LOGIN_FAILED });
          //console.log(error);
          toastr.error('Login failed! Username or password is incorrect');

          // TODO:remove below when toastr is implemented
          me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
        });
    }

  }
  onUserNameChange(e) {
    this.setState({ username: e.target.value })
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (

      <div className='Panel'>
        <h1 className='headline'>Welcome To Online Ordering</h1>
        <div style={{ borderBottom: '1px solid rgb(238, 238, 238)', padding: '100px' }}>
          <Input
            id="custid"
            type="text"
            label="UserName"
            name="name"
            placeholder="Username"
            required={true}
            errorMessage={this.state.usernameError}
            inputClassName="extra-class-on-input-tag"
            value={this.state.username}
            onChange={this.onUserNameChange.bind(this) }
            />
          <Input.Password
            id="password"
            type="search"
            label="Password"
            name="name"
            placeholder="Password"
            required={true}
            errorMessage={this.state.passwordError}
            inputClassName="extra-class-on-input-tag"
            value={this.state.password}
            onChange={this.onPasswordChange.bind(this) }
            />
            <div style={{marginTop:'50px'}}>
            <Button 
              TagName="button"
              block={true}
              disabled={false}
              kind="secondary"
              type="button"
              waiting={false}
              onClick={this.onLoginClick.bind(this) }
              >
              Login
            </Button>
          </div>
        </div>
      </div>


    );
  }
}

LoginPage.propTypes = {
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
      debugger
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
)(LoginPage);

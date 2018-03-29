/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CUSTOMER_AUTHENTICATE,
} from './constants';

import axios from 'axios';
const urlContants = require('../App/appconstants/urlConstants');
const loginStatus = require('../App/appconstants/loginStatus');

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function customerAuthenticate(username, password) {




    let url = 'http://10.31.87.23:81/api/customers/login';
    debugger;
    let status = '';
    const userData = {
      userName: username,
      password: password
    }

    
 var action= {
    type: CUSTOMER_AUTHENTICATE,
    status: loginStatus.LOGIN_SUCCESS
  };

return action;
//     axios.post(url,
//       JSON.stringify(userData), {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       },
//     )

//       .then(function (response) {
//         debugger

//         status = response.status === 200 ? loginStatus.LOGIN_SUCCESS : loginStatus.LOGIN_FAILED;
//         console.log(response);
//         action.status = status;
//         return action;
// //        return loginStatusResponse(status)


//       })
//       .catch(function (error) {
//         status = loginStatus.LOGIN_FAILED;
//         console.log(error);
//         action.status = status;
//         return action;
//         //return loginStatusResponse(status)

//       });
}

function loginStatusResponse(status) {
  debugger;
  return {
    "type": CUSTOMER_AUTHENTICATE,
    "status": status
  };
}

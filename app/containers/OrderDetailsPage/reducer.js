/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  ORDER_DETAILS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  status:false
});

function orderDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_DETAILS:

      // Delete prefixed '@' from the github username
      return state
        .set('status', action.status);
    default:
      return state;
  }
}

export default orderDetailsReducer;

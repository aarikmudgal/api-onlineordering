/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectLoginStatus = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('status')
);

export {
  selectLogin,
  makeSelectLoginStatus,
};

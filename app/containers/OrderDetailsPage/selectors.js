/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectOrderDetails = (state) => state.get('orderdetails');

const makeSelectOrderDetails = () => createSelector(
  selectOrderDetails,
  (orderDetailsState) => orderDetailsState.get('status'),
);

export {
  selectOrderDetails,
  makeSelectOrderDetails,
};

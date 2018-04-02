/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCheckoutDetails = (state) => state.get('checkoutdetails');

const makeSelectCheckoutDetails = () => createSelector(
  selectCheckoutDetails,
  (checkoutdetailsState) => checkoutdetailsState.get('status'),
);

export {
  selectCheckoutDetails,
  makeSelectCheckoutDetails,
};

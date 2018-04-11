/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHealthDetails = (state) => state.get('healthdetails');

const makeSelectHealthDetails = () => createSelector(
  selectHealthDetails,
  (healthdetailsState) => healthdetailsState.get('status'),
);

export {
  selectHealthDetails,
  makeSelectHealthDetails,
};

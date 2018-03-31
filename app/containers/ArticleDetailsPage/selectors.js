/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectArticleDetails = (state) => state.get('articledetails');

const makeSelectArticleDetails = () => createSelector(
  selectArticleDetails,
  (articleDetailsState) => articleDetailsState.get('status'),
);

export {
  selectArticleDetails,
  makeSelectArticleDetails,
};

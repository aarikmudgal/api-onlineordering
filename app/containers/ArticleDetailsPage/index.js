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
import { articleDetails } from '../ArticleDetailsPage/actions';
import { changeUsername } from './actions';
import { makeSelectArticleDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Input, Button, Profile, ProfilePicture, ProfileDropdown, Description,ScrollToTopButton } from 'metro-ui-components';
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Typography from 'material-ui/Typography';
import imagelogo from './maggi.png';
import TextField from 'material-ui/TextField';
import Header from 'components/Header';
import axios from 'axios';
import Profilepanel from '../App/shared/Profilepanel';
const urlContants = require('../App/appconstants/urlConstants');

const styles = {
  card: {
    display: 'flex',
  },
  close: {

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 150,
    marginLeft: 600,
    backgroundSize: 'contain',
    marginTop: -180
  },
  controls: {
    display: 'flex',
    alignItems: 'center',

  },
  playIcon: {
    height: 38,
    width: 38,
  },
};
export class ArticleDetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props)
    this.state = { articleDetails: [], quantity: 0, cartItemsCount: 0, open: false }
    this.handleQuantityChange.bind(this);
  }
  componentDidMount() {
    debugger
    this.fetchArticleDetails();
    this.createNewOrder();
    //this.fetchOrderDetails();
    if (window.sessionStorage.getItem('OrderId')) {
      this.fetchOrderDetails();
    }
  }


  handleRequestClose() {
    this.setState({
      open: false,
    })
  };



  fetchOrderDetails() {
    let me = this;
    let url = urlContants.orderDetails.replace("[ORDER_ID]", window.sessionStorage.getItem('OrderId'));
    axios.get(url, {
      headers: {
        'customerId': window.sessionStorage.getItem('CustomerId'),
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          window.sessionStorage.setItem('cartItemsCount', response.data.orderedArticles.length);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
  createNewOrder() {
    let me = this;
    let orderdata = {
      "CustomerId": window.sessionStorage.getItem('CustomerId'),
      "Status": 1,
      "OrderTotalPrice": 0,
      "OrderedArticles": []
    }
    axios.post(urlContants.orders,
      JSON.stringify(orderdata), {
        headers: {
          'customerId': window.sessionStorage.getItem('CustomerId'),
          'Content-Type': 'application/json',
        }
      },
    )
      .then(function (response) {
        debugger;
        if (response.status === 200) {
          let order = JSON.parse(response.data.Order);
          window.sessionStorage.setItem('OrderId', order.OrderId);
          window.sessionStorage.setItem('cartItemsCount', order.OrderedArticles.length);
          //me.setstate({cartItemsCount: order.OrderedArticles.length})
          me.props.history.push('/articleDetails');
        }
        else {
          console.log("Error recieved while fetching order : " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  fetchArticleDetails() {
    let me = this;
    window.sessionStorage.getItem('CustomerId')
    window.sessionStorage.getItem('FirstName')
    axios.get(urlContants.articleList)
      .then(function (response) {
        if (response.status === 200) {
          me.setState({ articleDetails: response.data });
          
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
  // isDigits(e) {
  //   // Returns true if string contains only digits 0 - 9 -?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?
  //   var intRegex = /^[-]\?\d{1,2}([.]\d{1,2})?$/;
  //   return intRegex.test(e);
  // }
  handleQuantityChange(e, article) {
    if (e.target.value > 0) {
      article.Quantity = e.target.value;
    }

  }
  handleArticleAdd(article) {
    let me = this;
    let articleToAdd = {
      'ArticleId': article.articleId,
      'ArticleName': article.articleName,
      'ArticleDescription': article.articleDescription,
      'ArticlePrice': article.articlePrice,
      'Quantity': article.Quantity,
      'ImageUrl': article.articleImageUrl
    }
    let url = urlContants.articleAdd.replace("[ORDER_ID]", window.sessionStorage.getItem('OrderId'));
    axios.post(url,
      JSON.stringify(articleToAdd), {
        headers: {
          'customerId': window.sessionStorage.getItem('CustomerId'),
          'Content-Type': 'application/json',
        }
      }
    )
      .then(function (response) {
        debugger
        if (response.status === 200) {
          let order = JSON.parse(response.data.UpdatedOrder);
          window.sessionStorage.setItem('OrderId', order.OrderId);
          window.sessionStorage.setItem('cartItemsCount', order.OrderedArticles.length);
          me.setState({ cartItemsCount: order.OrderedArticles.length });
          me.setState({ open: true })
          console.log(this.state.cartItemsCount);
        }
        else {
          console.log("Error recieved while fetching order : " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  onCartClick(e) {
    e.preventDefault();
    this.props.history.push('/orderDetails');
  }
  handleTop()
  {
    window.scrollTo(0, 0)
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    var ArticleDetails = this.state.articleDetails;
    console.log(ArticleDetails);
    let i = 0;
    return (
      <div>
        <div>
          <Profilepanel onCartClick={this.onCartClick.bind(this)} 
                cartItemsCount={window.sessionStorage.getItem('cartItemsCount')}     />
        </div>
        <div style={{ paddingTop:'90px' }}>
          {ArticleDetails && ArticleDetails.map((articleStore, i) => {
            articleStore.Quantity = 1;
            let imageUrl = urlContants.articleImage.replace("[IMAGE_URL]", articleStore.articleImageUrl); 
            return (
              <div key={i + 1} style={{ padding: '10px'}}>
                <Card id="acard" style={styles.card}> 
                  <div style={styles.details}>
                    <CardContent style={styles.content}>
                      <Typography variant="headline">{articleStore.articleName}</Typography>
                      <Typography variant="subheading" color="textSecondary">
                        {articleStore.articleDescription}
                      </Typography>
                      <div style={{ display: 'flex' }}>
                        <Typography style={{ color: 'red', fontSize: 'large', marginTop: '35px' }}>
                          Price:
                      </Typography>
                        <span style={{ marginTop: '37px' }}> {"€ " + articleStore.articlePrice}</span>
                        <TextField style={{ marginLeft: '200px' }}
                          id="qty"
                          label="Qty"
                          type="number" 
                          min="0"
                          defaultValue="1"
                          required
                          pattern={/^[0-9\b]+$/}
                          //value = {this.state.quantity}
                          onChange={(e) => this.handleQuantityChange(e, articleStore)}
                          margin="normal"
                        />
                      </div>
                    </CardContent>
                    <CardActions style={{ marginLeft: '10px' }}>
                      <Button size="large" onClick={this.handleArticleAdd.bind(this, articleStore)}>Add</Button>
                      <CardMedia
                      id="articleimage"
                        style={styles.cover}
                        image={imageUrl}
                      />
                    </CardActions>
                  </div>

                </Card>
              </div>
            );
          })}
        </div>
        <Snackbar
          open={this.state.open}
          message="Article added successfully"
          autoHideDuration={4000}
          onClose={this.handleRequestClose.bind(this)}
        />
        <ScrollToTopButton visible onClick={this.handleTop.bind(this)}>
          ScrollToTopButton
        </ScrollToTopButton>
      </div>
    )
  }
}

ArticleDetailsPage.propTypes = {
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
    details: (articleId, articleName, articleDescription, articlePrice) => {
      //if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(articleDetails(articleId, articleName, articleDescription, articlePrice));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  status: makeSelectArticleDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'articledetails', reducer });
const withSaga = injectSaga({ key: 'articledetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticleDetailsPage);

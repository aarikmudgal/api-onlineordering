/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Profilepanel from '../App/shared/Profilepanel';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';
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
import { orderDetails } from '../OrderDetailsPage/actions';
import { changeUsername } from './actions';
import { makeSelectOrderDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Input, Button, Icon, Profile, ProfilePicture, ProfileDropdown, Description } from 'metro-ui-components';
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import imagelogo from './emptycart.png';
import TextField from 'material-ui/TextField';
import Header from 'components/Header';
import SvgIcon from 'material-ui/SvgIcon';
import pricetag from './pricetag.png'
import Tooltip from 'material-ui/Tooltip';
import './Login.css';
const urlContants = require('../App/appconstants/urlConstants');
const styles = {
  button: {
    margin: '2px',
  },
  rightIcon: {
    marginLeft: '2px',
  },
  icon: {
    marginLeft: '40px'
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 100
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 150,
    marginLeft: 200,
    backgroundSize: 'contain',
    margin: 40
  },
  controls: {
    display: 'flex',
    alignItems: 'center',

  },
  buttonStyle: {
    marginLeft: '200px', marginTop: '-30px'
  },
};
export class OrderDetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor() {
    super()
    count: 0
    this.state = { orderDetails: [] }
    this.handleRemoveArticle.bind(this);
  }
  componentDidMount() {
    this.fetchOrderDetails();
  }
  onCartClick(e) {
    e.preventDefault();
    this.props.history.push('/orderDetails');
  }

  handleRemoveArticle(e, article) {
    let me = this;
    let url = urlContants.articleDelete.replace("[ORDER_ID]", window.sessionStorage.getItem('OrderId'))
      .replace("[ARTICLE_ID]", article.ArticleId);

    axios.delete(url, {
      headers: {
        'customerId': window.sessionStorage.getItem('CustomerId'),
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          debugger
          //me.setState({ orderDetails: response.data.Order });     
          //window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
          me.fetchOrderDetails();
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
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
          let order = JSON.parse(response.data.Order)
          window.sessionStorage.setItem('cartItemsCount', order.OrderedArticles.length);
          me.setState({ orderDetails: order });
        }
        console.log('aaaaa', response);
      })
      .catch(function (error) {
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
  handleChange(e) {
    this.setState({ quantity: e.target.value })
  }
  handleAdd(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  onCheckoutClick(e) {
    var OrderDetails = this.state.orderDetails;
    window.sessionStorage.setItem('OrderTotalPrice', OrderDetails.OrderTotalPrice)
    window.sessionStorage.setItem('OrderId', OrderDetails.OrderId)

    this.submitOrder();

    let me = this;
    me.props.history.push('/checkout');
  }
  submitOrder() {

    let me = this;
    let url = urlContants.orderSubmit.replace("[ORDER_ID]", window.sessionStorage.getItem('OrderId'));
    axios.put(url, null, {
      headers: {
        'customerId': window.sessionStorage.getItem('CustomerId'),
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {
        debugger;
        if (response.status === 200) {
          console.log('order submitted successfully', response);
        }

      })
      .catch(function (error) {
        debugger
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
  handleAddItemsToCart(e) {
    let me = this;
    me.props.history.push('/articleDetails');
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    }
    var OrderDetails = this.state.orderDetails;
    console.log('dhdhdhdhh', OrderDetails)
    let i = 0;

    if (this.state.orderDetails.OrderedArticles == 0 || this.state.orderDetails == null || this.state.orderDetails == undefined) {
      return (
        <div>
          <div>
            <Profilepanel onCartClick={this.onCartClick.bind(this) }
              />
          </div>
          <Card id="acard" style={{ margin: '20px', paddingTop: '100px', height: '100%' }}>
            <CardMedia>
              <div style={{ marginLeft: '22%' }}>
                <img src={require("./emptycart.png") } />
              </div>
            </CardMedia>
            <div style={{ marginLeft: '380px', marginTop: '50px', marginBottom: '50px' }}>
              <Button kind="primaryRaised" onClick={this.handleAddItemsToCart.bind(this) }>
                Add Items To Cart
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    else {
      return (
        <div>
          <div style={{ marginBottom: '90px' }}>
            <Profilepanel onCartClick={this.onCartClick.bind(this) }
              cartItemsCount={window.sessionStorage.getItem('cartItemsCount') }    />
          </div>
          <div>
            <ul className="product-list">
              {OrderDetails && OrderDetails.OrderedArticles
                && OrderDetails.OrderedArticles.map((articleStore, i) => {
                  let imageUrl = urlContants.articleImage.replace("[IMAGE_URL]", articleStore.ImageUrl);
                  return (


                    <li className="product-list__item">
                      <div className="product thumbnail">
                        <img src={imageUrl} alt="product" style={{ width: '150px', height: '150px' }} />
                        <div className="caption">
                          <h3>{articleStore.ArticleName}</h3>
                          <span style={{ display: 'flex' }}>
                            <h5 style={{ marginRight: '146px' }}>{articleStore.ArticleDescription}</h5>
                            <h5 style={{ color: 'red' }}>Units: {articleStore.Quantity}</h5>
                          </span>
                          <Tooltip id="tooltip-icon1" title="Unit Price">
                            <div>
                              <img src={require("./pricetag2.png") } />
                              <div className="product__price">{"€ " + articleStore.ArticlePrice}</div>
                            </div>
                          </Tooltip>

                          <Tooltip id="tooltip-icon2" title="Total Price">
                            <div>
                              <img style={styles.icon} src={require("./pricetag.png") } />

                              <div className="product__price">{"€ " + articleStore.TotalPrice}</div>
                            </div>
                          </Tooltip>

                          <div className="product__button-wrap">
                            <button
                              className={'btn btn-danger'}
                              onClick={(e) => this.handleRemoveArticle(e, articleStore) }
                              >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                  );
                }) }

            </ul>
          </div>
          <div>
            <Button
              kind="primaryRaised"
              size="large"
              block
              colorOverride="dark-blue"
              onClick={this.onCheckoutClick.bind(this) }
              >
              Checkout  (Grand Total  €{OrderDetails.OrderTotalPrice})
            </Button>
          </div>
        </div >
      )
    }

  }
}

OrderDetailsPage.propTypes = {
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
    details: () => {
      //if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(orderDetails());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  status: makeSelectOrderDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'orderdetails', reducer });
const withSaga = injectSaga({ key: 'orderdetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrderDetailsPage);

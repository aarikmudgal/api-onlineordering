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
import './Login.css';
const urlContants = require('../App/appconstants/urlConstants');
const styles = {
  button: {
    margin: '2px',
  },
  rightIcon: {
    marginLeft: '2px',
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
          
          me.setState({ orderDetails: response.data.Order });     
          window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
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
          window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
          me.setState({ orderDetails: response.data.Order });
        }
        console.log('aaaaa',response);
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
  handleBackClick(e) {
    let me = this;
    me.props.history.push('/articleDetails');
  }
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    let me = this;
    me.props.history.push('/');
  }
  onButtonClick(e) {
    var OrderDetails = this.state.orderDetails;
    window.sessionStorage.setItem('OrderTotalPrice', OrderDetails.OrderTotalPrice)
    window.sessionStorage.setItem('OrderId', OrderDetails.OrderId)
    let me = this;
    me.props.history.push('/checkout');
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
    if (this.state.orderDetails.Articles == 0 || this.state.orderDetails == null || this.state.orderDetails == undefined) {
      return (
        <div>
          <div>
            <Profile>
              <img style={{ marginRight: '10px' }} src={require("./back.png")} onClick={this.handleBackClick.bind(this)} />
              <ProfilePicture />
              <Profile.Content title={window.sessionStorage.getItem('CustomerName')}>
              </Profile.Content>
              <Profile.Buttons>
                <img src={require("./shopping-cart.png")} />
                <div style={{ marginLeft: '50px' }}>
                  <a href="#" onClick={this.logout.bind(this)}><img src={require("./logout.png")} /></a>
                </div>
              </Profile.Buttons>
            </Profile>
          </div>
          <Card id="acard" style={{ margin: '20px' ,height:'100%'}}>
            <CardMedia>
              <div style={{ marginLeft: '22%' }}>
                <img src={require("./emptycart.png")} />
              </div>
            </CardMedia>
            <div style={{ marginLeft: '380px', marginTop: '50px', marginBottom: '50px' }}>
              <Button kind="primaryRaised" onClick={this.handleAddItemsToCart.bind(this)}>
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
          <div>
            <Profile>
              <img style={{ marginRight: '10px' }} src={require("./back.png")} onClick={this.handleBackClick.bind(this)} />
              <ProfilePicture />
              <Profile.Content title={window.sessionStorage.getItem('CustomerName')}>
              </Profile.Content>
              <Profile.Buttons>
                <span style={{ color: '#1a3b7c', fontSize: 'larger' }}>Items:</span>
                <input style={{ color: '#1a3b7c', width: '30px' }} name='counter' id='cartcounter' type='number'
                  value={window.sessionStorage.getItem('cartItemsCount')} />
                <img src={require("./shopping-cart.png")} />
                <div style={{ marginLeft: '50px' }}>
                  <a href="#" onClick={this.logout.bind(this)}><img src={require("./logout.png")} /></a>
                </div>
              </Profile.Buttons>
            </Profile>
          </div>
          {OrderDetails && OrderDetails.Articles
            && OrderDetails.Articles.map((articleStore, i) => {
              return (
                <div key={i + 1} style={{ padding: '10px' }}>
                  <Card id="acard" style={styles.card}>
                    <div className='row'>
                      <div className='col-md-4'>
                        <CardMedia
                          style={styles.cover}
                          image={articleStore.ImageUrl}
                        />
                      </div>
                      <div style={styles.details} className='col-md-4'>
                        <CardContent style={styles.content}>
                          <Typography variant="headline">{articleStore.ArticleName}</Typography>
                          <Typography variant="subheading" color="textSecondary">
                            {articleStore.ArticleDescription}
                          </Typography>
                          <div style={{ display: 'flex' }}>
                            <Typography style={{ color: 'red', fontSize: 'large', marginTop: '35px' }}>
                              Price:
                      </Typography>
                            <span style={{ marginTop: '35px' }}> {"€ " + articleStore.ArticlePrice}</span>
                            <Typography style={{ color: 'red', fontSize: 'large', marginTop: '35px', marginLeft: '110px' }}>
                              TotalPrice:
                      </Typography>
                            <span style={{ marginTop: '35px' }}> {"€ " + articleStore.TotalPrice}</span>
                          </div>
                          <div style={{ display: 'flex' }}>
                            <TextField
                              id="qty"
                              label="Qty"
                              type="number"
                              onChange={this.handleChange.bind(this)}
                              margin="normal"
                              value={articleStore.Quantity}
                            />

                            <div style={styles.buttonStyle}>
                              <Button kind="primaryRaised" onClick={(e) => this.handleRemoveArticle(e, articleStore)}>
                                Remove
                      </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>

                    </div>
                  </Card>
                </div>

              );
            })}
          <div>
            <Button
              kind="primaryRaised"
              size="large"
              block
              colorOverride="dark-blue"
              onClick={this.onButtonClick.bind(this)}
            >
              Checkout  (Grand Total  €{OrderDetails.OrderTotalPrice})
        </Button>
          </div>
        </div>
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

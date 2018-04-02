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
<<<<<<< HEAD
import './Login.css';
=======

>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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
import { Input, Button, Profile, ProfilePicture, ProfileDropdown, Description } from 'metro-ui-components';
<<<<<<< HEAD
import Card,{ CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
=======
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
import Typography from 'material-ui/Typography';
import imagelogo from './maggi.png';
import TextField from 'material-ui/TextField';
import Header from 'components/Header';
import axios from 'axios';
const urlContants = require('../App/appconstants/urlConstants');

const styles = {
  card: {
    display: 'flex',
  },
<<<<<<< HEAD
  close: {
    
  },
=======
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
<<<<<<< HEAD
    width: 200,
    height: 150,
    marginLeft: 600,
    backgroundSize: 'contain',
    marginTop: -180
=======
    width: 120,
    height: 150,
    marginLeft: 100,
    backgroundSize: 'contain',
    marginTop: 30
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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
<<<<<<< HEAD
  constructor(props) {
    super(props)
    count: 0
    this.state = { articleDetails: [], quantity: 0, cartItemsCount: 0, open: false }
    this.handleQuantityChange.bind(this);
  }
  componentDidMount() {
    this.fetchArticleDetails();
    this.createNewOrder();
    window.sessionStorage.getItem('cartItemsCount')
    if (window.sessionStorage.getItem('OrderId')) {
      this.fetchOrderDetails();
    }
  }


  handleRequestClose(){
    this.setState({
      open: false,
    })
  };


  onCartClick(e) {
    e.preventDefault();
    let me = this;
    me.props.history.push('/orderDetails');
  }
  fetchOrderDetails() {
=======
  constructor() {
    super()
    count: 0
    this.state = { articleDetails: [], quantity: 0 ,cartItemsCount:0}
    this.handleQuantityChange.bind(this);
  }
  componentDidMount() {
    this.fetchArticleDetails();    
    this.createNewOrder();
    if(window.sessionStorage.getItem('OrderId'))
      {
        this.fetchOrderDetails();
      }
  }
  onCartClick(e){
    e.preventDefault();
    let me=this;
    me.props.history.push('/orderDetails');
  }
  fetchOrderDetails()
  {
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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
<<<<<<< HEAD
          window.sessionStorage.setItem('cartItemsCount', response.data.articles.length);
          me.setstate({ cartItemsCount: response.data.articles.length })
=======
          debugger
          window.sessionStorage.setItem('cartItemsCount', response.data.articles.length);
          me.setstate({cartItemsCount:response.data.articles.length})
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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
<<<<<<< HEAD
    let me = this;
=======
     let me=this;
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
    let orderdata = {
      "customerId": window.sessionStorage.getItem('CustomerId'),
      "status": 1,
      "orderTotalPrice": 0,
      "articles": []
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
<<<<<<< HEAD
        if (response.status === 200) {
=======
        if (response.status === 200) {    
          debugger;      
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
          window.sessionStorage.setItem('OrderId', response.data.OrderId);
          // window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
          // me.setstate({cartItemsCount:response.data.Order.Articles.length})
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
<<<<<<< HEAD
          window.sessionStorage.getItem('cartItemsCount')
=======
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        // TODO:remove below when toastr is implemented
        //me.setState({passwordError:'Login failed! Username or password is incorrect'}); 
      });
  }
<<<<<<< HEAD
  // isDigits(e) {
  //   // Returns true if string contains only digits 0 - 9 -?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?
  //   var intRegex = /^[-]\?\d{1,2}([.]\d{1,2})?$/;
  //   return intRegex.test(e);
  // }
  handleQuantityChange(e, article) {
=======
  handleQuantityChange(e,article) {
    
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
    if (e.target.value > 0) {
      article.Quantity = e.target.value;
    }

<<<<<<< HEAD


  }
  handleArticleAdd(article) {
    let me = this;
=======
  }
  handleArticleAdd(article) {
    let me=this;
    debugger;
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
    let articleToAdd = {
      'ArticleId': article.articleId,
      'ArticleName': article.articleName,
      'ArticleDescription': article.articleDescription,
      'ArticlePrice': article.articlePrice,
      'Quantity': article.Quantity,
<<<<<<< HEAD
      'ImageUrl': article.articleImageUrl
    }
    let url = urlContants.articleAdd.replace("[ORDER_ID]", window.sessionStorage.getItem('OrderId'));
=======
      'ImageUrl':article.articleImageUrl
    }
    let url = urlContants.articleAdd.replace("[ORDER_ID]",window.sessionStorage.getItem('OrderId'));
    debugger;
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
    axios.post(url,
      JSON.stringify(articleToAdd), {
        headers: {
          'customerId': window.sessionStorage.getItem('CustomerId'),
          'Content-Type': 'application/json',
        }
      }
    )
      .then(function (response) {
        if (response.status === 200) {
<<<<<<< HEAD
          window.sessionStorage.setItem('OrderId', response.data.Order.OrderId);
          window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
          me.setState({ cartItemsCount: response.data.Order.Articles.length });
          me.setState({ open: true })
=======
          debugger;
          window.sessionStorage.setItem('OrderId', response.data.Order.OrderId);
          window.sessionStorage.setItem('cartItemsCount', response.data.Order.Articles.length);
          me.setState({cartItemsCount:response.data.Order.Articles.length});
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
          console.log(this.state.cartItemsCount);
        }
        else {
          console.log("Error recieved while fetching order : " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
<<<<<<< HEAD

  }
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    let me = this;
    me.props.history.push('/');
  }
=======
    
  }
 
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    var ArticleDetails = this.state.articleDetails;
    console.log(ArticleDetails);
<<<<<<< HEAD
    let i = 0;
    return (
      <div>
        <div>
          <Profile>
            <ProfilePicture />
            <Profile.Content title={window.sessionStorage.getItem('CustomerName')}>
            </Profile.Content>
            <Profile.Buttons>
              <span style={{ color: '#1a3b7c', fontSize: 'larger' }}>Items:</span>
              <input style={{ color: '#1a3b7c', width: '30px' }} name='counter' id='cartcounter' type='number'
                value={window.sessionStorage.getItem('cartItemsCount')} />
              <img src={require("./shopping-cart.png")} onClick={this.onCartClick.bind(this)} />
              <div style={{ marginLeft: '50px' }}>
                <a href="#" onClick={this.logout.bind(this)}><img src={require("./logout.png")} /></a>
              </div>
            </Profile.Buttons>
          </Profile>
        </div>
        <div style={{ height: '1500px', overflowY: 'scroll' }}>
          {ArticleDetails && ArticleDetails.map((articleStore, i) => {
            articleStore.Quantity = 1;
            return (
              <div key={i + 1} style={{ padding: '10px' }}>
                <Card id="acard" style={styles.card}>
=======
    let i=0;
    return (
      <div>
      <div>
        <Profile>
          <ProfilePicture />
          <Profile.Content title={window.sessionStorage.getItem('CustomerName')}>
          </Profile.Content>
          <Profile.Buttons>
            <span style={{ color: '#1a3b7c', fontSize: 'larger' }}>Items:</span>
            <input style={{ color: '#1a3b7c', width: '30px' }} name='counter' id='cartcounter' type='number' 
            value={window.sessionStorage.getItem('cartItemsCount')} />
            <img src={require("./shopping-cart.png")} onClick={this.onCartClick.bind(this)}/>
          </Profile.Buttons>
        </Profile>
      </div>

        <div className='row' style={{ height: '1500px', overflowY: 'scroll' }}>
          {ArticleDetails && ArticleDetails.map((articleStore,i) => {
            articleStore.Quantity=1;
            return (
              <div key={i+1} style={{ padding: '10px' }}>
                <Card style={styles.card}>
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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
<<<<<<< HEAD
                        <span style={{ marginTop: '37px' }}> {"€ " + articleStore.articlePrice}</span>
                        <TextField style={{ marginLeft: '200px' }}
                          id="qty"
                          label="Qty"
                          type="number"
                          min="0"
                          required
                          pattern={/^[0-9\b]+$/}
                          inputmode="numeric"
                          //value = {this.state.quantity}
                          onChange={(e) => this.handleQuantityChange(e, articleStore)}
=======
                        <span style={{ marginTop: '35px' }}> {"€ " + articleStore.articlePrice}</span>
                        <TextField style={{ marginLeft: '100px' }}
                          id="qty"
                          label="Qty"
                          type="number"                          
                          //value = {articleStore.Quantity}
                          onChange={(e) => this.handleQuantityChange(e, articleStore )}
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
                          margin="normal"
                        />
                      </div>
                    </CardContent>
                    <CardActions style={{ marginLeft: '10px' }}>
<<<<<<< HEAD
                      <Button size="large" onClick={this.handleArticleAdd.bind(this, articleStore)}>Add</Button>
                      <CardMedia
                        style={styles.cover}
                        image={articleStore.articleImageUrl}
                      />
                    </CardActions>
                  </div>

=======
                      <Button size="small" onClick={this.handleArticleAdd.bind(this, articleStore)}>Add</Button>
                    </CardActions>
                  </div>
                  <CardMedia
                    style={styles.cover}
                    image={articleStore.articleImageUrl}
                  />
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
                </Card>
              </div>
            );
          })}
        </div>
<<<<<<< HEAD
        <Snackbar
          open={this.state.open}
          message="Article added successfully"
          autoHideDuration={4000}
          onClose={this.handleRequestClose.bind(this)}
        />
=======
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
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

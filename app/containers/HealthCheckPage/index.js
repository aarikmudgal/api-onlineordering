/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import './Health.css';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { healthDetails } from '../CheckoutPage/actions';
import { changeUsername } from './actions';
import { makeSelectHealthDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Input, Button, Profile, ProfilePicture, ProfileDropdown, Description, Tag } from 'metro-ui-components';
import Card, { CardHeader, CardContent, CardActions, CardMedia } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Header from 'components/Header';
import Divider from 'material-ui/Divider';
import axios from 'axios';
const urlContants = require('../App/appconstants/urlConstants');
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '50px',
  },
};
export class HealthCheckPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props)
    this.state = {
      healthObjects: []
    }

    this.serviceObjects = [{
      "serviceName": "Customers",
      "serviceUrl": "/api/customers/health",
      "serviceStatusCode": '',
      "serviceStatusText": ''
    },
    {
      "serviceName": "Articles",
      "serviceUrl": "/api/articles/health",
      "serviceStatusCode": '',
      "serviceStatusText": ''
    },
    {
      "serviceName": "Orders",
      "serviceUrl": "/api/orders/health",
      "serviceStatusCode": '',
      "serviceStatusText": ''
    }]

    this.urls = ["/api/customers/health", "/api/articles/health", "/api/orders/health"]
    this.promises = [];

  }
  componentDidMount() {
    this.fetchHealthDetails();
    this.interval = setInterval(this.fetchHealthDetails.bind(this), 30000);
  }
  fetchHealthDetails() {
    debugger
    let me = this;
    this.serviceObjects.forEach(function (service) {
      me.promises.push(axios.get(service.serviceUrl))
    });
   

    axios.all(me.promises).then(function (results) {
      debugger
      results.forEach(function (response) {
        debugger
        let reqUrl = response.request.responseURL.slice(16);
        let service = me.serviceObjects.find(service => service.serviceUrl === reqUrl);
        service.serviceStatusCode = response.status;
        service.serviceStatusText = response.statusText;
      })
      me.setState({ healthObjects: me.serviceObjects })
    }).catch(function(response){
      debugger
// let reqUrl = response.request.responseURL.slice(16);
//         let service = me.serviceObjects.find(service => service.serviceUrl === reqUrl);
//         service.serviceStatusCode = response.status;
//         service.serviceStatusText = response.statusText;
return Promise.reject(response);
    })

  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    var HealthDetails = this.state.healthObjects;
    let i = 0;
    return (
      <div style={{background:'lightgray'}}>
        <div>
          <Profile>
            <Typography  style={{marginLeft:'400px'}}color="primary" variant="headline">Health Status</Typography>
          </Profile>
        </div>
        <div>
          {HealthDetails && HealthDetails.map((healthStore, i) => {
            var a=healthStore.serviceStatusCode;
            debugger
            return (
              
              <div key={i + 1} style={styles.root}> 
                <List id="acard" >
                  <ListItem>
                    <div style={{ display: 'block' }}>
                      <Typography variant="headline">{healthStore.serviceName}</Typography>
                      <Typography style={{ fontWeight: 'bold' }} color="primary">http://127.0.0.1{healthStore.serviceUrl}</Typography>
                      <Typography color="inherit">UrlCheck(http://127.0.0.1{healthStore.serviceUrl}):status code {healthStore.serviceStatusText}({healthStore.serviceStatusCode})</Typography>
                    </div>
                    {a==200?
                    <Tag className="btn-Success">
                      Healthy
                    </Tag>:<Tag className="btn-danger1">
                      UnHealthy
                    </Tag>}
                  </ListItem>
                </List>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

HealthCheckPage.propTypes = {
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
      dispatch();
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  status: makeSelectHealthDetails(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'healthdetails', reducer });
const withSaga = injectSaga({ key: 'healthdetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HealthCheckPage);

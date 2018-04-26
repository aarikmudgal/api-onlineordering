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
var async = require('async');

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
      "serviceName": "Customers Service",
      "serviceUrl": "/api/customers/health",
      "serviceStatusCode": '',
      "serviceStatusText": ''
    },
      {
        "serviceName": "Articles Service",
        "serviceUrl": "/api/articles/health",
        "serviceStatusCode": '',
        "serviceStatusText": ''
      },
       {
        "serviceName": "Inventory Service",
        "serviceUrl": "/api/inventory/health",
        "serviceStatusCode": '',
        "serviceStatusText": ''
      },
      {
        "serviceName": "Orders Service",
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
  getHealthStatues(callback) {
    console.log('Starting the process of getting the statues of the all the services');
    //get all the services from the configurations
    let services = this.serviceObjects;//config.get('services');
    let statues = [];

    let me = this;
    //Iterate over the complete the array of services to get the statues
    async.each(services, (service, cb) => {
      console.log('Getting the status for service: ' + service.serviceName + ' with url: ' + service.serviceUrl);
      try {
         //perform get action to get the services.
      axios.get(service.serviceUrl)
        .then((res) => {
          debugger;
          console.log('Receive success status for service: ' + service.serviceName);
          statues.push({
            name: service.serviceName,
            url: service.serviceUrl,
            statuscode: res.status,
            status: 'running'
          });
          cb();
        })
        .catch((err) => {
          debugger;
          if (err.response) {
            console.log('Receive failed status for service: ' + service.serviceName);
            statues.push({
              name: service.serviceName,
              url: service.serviceUrl,
              statuscode: err.response.status,
              status: 'not-running'
            });
          } else {
            console.log('Status for service: ' + service.serviceName + ' not found');
            statues.push({
              name: service.serviceName,
              url: service.serviceUrl,
              statuscode: err.response.status,
              status: 'not-found'
            });
          }

          cb();
        })
      } catch (error) {
        console.log('Error before calling the health endpoint');
        cb();
      }
     
    }, (asyncCallbackErr) => {
      debugger;
      if (asyncCallbackErr) {
        console.log('Getting status for some service failed.');
        return callback(asyncCallbackErr);
      } else {
        console.log('Getting status for all services completed successfully.');
        statues = me._sortServices(statues);
        return callback(null, statues);
      }
    });
  }

  _sortServices(statues) {
    statues.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    })

    return statues;
  }

  fetchHealthDetails() {
    let me = this;
    this.getHealthStatues((err, serviceStatus) => {
      if (err) {
        console.log("Some error fetching service health status")
      } else {
        me.setState({ healthObjects: serviceStatus })
      }

    })
   
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    debugger;
    let services = this.state.healthObjects;
    let i = 0;
    return (
      <div style={{ background: 'lightgray' }}>
        <div>
          <Profile>
            <Typography  style={{ marginLeft: '400px' }}color="primary" variant="headline">Health Status</Typography>
          </Profile>
        </div>
        <div>
          {
            services && services.map((service, i) => {
              var status = service.statuscode;
              debugger
              return (

                <div key={i + 1} style={styles.root}>
                  <List id="acard" >
                    <ListItem>
                      <div style={{ display: 'block' }}>
                        <Typography variant="headline">{service.name}</Typography>
                        <Typography style={{ fontWeight: 'bold' }} color="primary">{service.url}</Typography>
                        <Typography color="inherit"> 
                          Status Code: {service.statuscode} Status: ({service.status}) 
                        </Typography>
                      </div>
                      {
                        status === 200 ?
                          <Tag className="btn-Success">
                            Healthy
                          </Tag> :
                          <Tag className="btn-danger1">
                            UnHealthy
                          </Tag>}
                    </ListItem>
                  </List>
                </div>
              );
            }) }
        </div>
                        <div style={{ marginTop: '50px' }}>
                         <iframe src="https://public.google.stackdriver.com/public/chart/11645122360911691418?drawMode=color&showLegend=true&theme=light" width="100%" height="400" scrolling="no" seamless="seamless"></iframe>
                       </div>
                       <div  style={{ marginTop: '50px' }}>
                         <iframe src="https://public.google.stackdriver.com/public/chart/8303522826034065945?drawMode=color&showLegend=true&theme=light" width="100%" height="400" scrolling="no" seamless="seamless"></iframe>
                       </div>
                       <div  style={{ marginTop: '50px' }}>
                         <iframe src="https://public.google.stackdriver.com/public/chart/9744838719229708699?drawMode=color&showLegend=true&theme=light" width="100%" height="400" scrolling="no" seamless="seamless"></iframe>
                       </div>
                       <div  style={{ marginTop: '50px' }}>
                         <iframe src="https://public.google.stackdriver.com/public/chart/14908325351524585133?drawMode=color&showLegend=true&theme=light" width="100%" height="400" scrolling="no" seamless="seamless"></iframe>
                         </div>
                       <div style={{ marginTop: '50px' }} >
                         <iframe src="https://public.google.stackdriver.com/public/chart/11645122360911688442?drawMode=color&showLegend=true&theme=light" width="100%" height="400" scrolling="no" seamless="seamless"></iframe>
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

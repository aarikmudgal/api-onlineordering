import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import logo from '../../images/icon-120x120.png';//./metro-united-inverted.svg';
import image1 from './avatar-example-image.png';
import messages from './messages';
import { Header, CompositeDropdown, LabelList, ProfilePicture, Address ,Media,MediaList} from 'metro-ui-components';
import './Header.css';

class Header1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
  }
  
  onLogoutClick(){
    sessionStorage.clear();
    window.location.href = "/";
  }
  
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    
    return ( 
      
      <Header 
        logoHref={logo}
        logoVariant="metro-united-inverted"
        positioning="relative"
      >
      {window.sessionStorage.getItem('CustomerId') ? 
        <CompositeDropdown
          userName={window.sessionStorage.getItem('CustomerName')}
          companyName="Infosys Technologies Limited"
          abbreviation="Infy"
          color="#CE61E0"
          badgeCount={1}
        >
          <LabelList>
            <LabelList.Item>
              <Media>
                <Media.Visual>
                  <ProfilePicture />
                </Media.Visual>
                <Media.Content>
                  <Address>
                    <strong>
                      {window.sessionStorage.getItem('CustomerName')}
                    </strong>
                    <br />
                    <a  >
                      Profile & Settings
                    </a>
                    <br />
                    <a  onClick={this.onLogoutClick.bind(this)}>
                      Logout
                    </a>
                  </Address>
                </Media.Content>
              </Media>
            </LabelList.Item>
          </LabelList>
        </CompositeDropdown> :
        null
      }
      </Header>
    );
  }
}

export default Header1;

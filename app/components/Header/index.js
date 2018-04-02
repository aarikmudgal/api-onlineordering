import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import logo from './metro-united-inverted.svg';
import messages from './messages';
<<<<<<< HEAD
import { Header } from 'metro-ui-components';
import cart from './shopping-cart.png'

class Header1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
  }
 
=======
import {Header} from 'metro-ui-components';
import cart from './shopping-cart.png'

class Header1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
 constructor()
 {
   super()
   count:0
 }
  handleChange()
  {
    console.log(counter);
  }
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    return (
<<<<<<< HEAD
      <Header
        logoHref={logo}
        logoVariant="metro-united-inverted"
        positioning="relative"
      >
        
      </Header>
=======
       <Header
          logoHref={logo}
          logoVariant="metro-united-inverted"
          positioning="relative"
          >
         
          </Header>
>>>>>>> 7a5e76f9bc556e1ee851c646a03fdce70c7ac961

    );
  }
}

export default Header1;

import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import logo from './metro-united-inverted.svg';
import messages from './messages';
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
  render() {
    return (
       <Header
          logoHref={logo}
          logoVariant="metro-united-inverted"
          positioning="relative"
          >
         
          </Header>

    );
  }
}

export default Header1;

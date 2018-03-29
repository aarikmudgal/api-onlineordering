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

class Header1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      // <div>
      //   <A href="https://twitter.com/mxstbr">
      //     <Img src={Banner} alt="react-boilerplate - Logo" />
      //   </A>
      //   <NavBar>
      //     <HeaderLink to="/">
      //       <FormattedMessage {...messages.home} />
      //     </HeaderLink>
      //     <HeaderLink to="/features">
      //       <FormattedMessage {...messages.features} />
      //     </HeaderLink>
      //   </NavBar>
      // </div>
       <Header
          logoHref={logo}
          logoVariant="metro-united-inverted"
          positioning="relative"
          />

    );
  }
}

export default Header1;

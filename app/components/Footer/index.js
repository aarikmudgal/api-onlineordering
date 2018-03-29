import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import {Footer} from 'metro-ui-components';

function Footer1() {
  return (
    <Footer transparent>
          <span>©METRO Group
          <Footer.Link href="#">
              Terms & Conditions
          </Footer.Link>
          </span>
          <span>  
            <Footer.Link href="#">
              German
            </Footer.Link>
            <Footer.Link href="#" active>
              English
            </Footer.Link>
            <Footer.Link href="#">
              Français
            </Footer.Link>
            <Footer.Link href="#">
              Česky
            </Footer.Link>
          </span>
        </Footer>  
  );
}

export default Footer1;

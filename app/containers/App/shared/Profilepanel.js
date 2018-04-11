import React from 'react';
import { Input, Button, Profile, ProfilePicture, ProfileDropdown, Description } from 'metro-ui-components';
import './Profile.css';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Badge from 'material-ui/Badge';
import SvgIcon from 'material-ui/SvgIcon';
const styles = {
  btnstyle: {
    position: 'absolute !important',
    marginTop: '4px',
    width: '80px'
  }
}
class Profilepanel extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
  }
  onButtonClick(e) {
    window.location.href = "/articleDetails";
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = { 
      loading,
      error,
      repos,
    };
    let count = window.sessionStorage.getItem('cartItemsCount');
    debugger;
    var x = window.location.pathname;
    return (
      <Profile>
        {x == "/orderDetails" || x == "/checkout" ?
          <Button colorOverride="dark-blue" onClick={this.onButtonClick.bind(this)}>Back</Button>
          : null}
        <Tooltip id="tooltip-icon" title="Go To Cart">
          <div style={{ marginLeft: '1250px' }}>
            <Badge badgeContent={this.props.cartItemsCount} color="secondary">
              <img id="imagecart" src={require("./shopping-cart.png")} onClick={this.props.onCartClick} />
            </Badge>
          </div>
        </Tooltip>
      </Profile>
    );
  }
}

export default Profilepanel;
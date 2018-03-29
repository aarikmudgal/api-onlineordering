import toastr from 'toastr';
//import {toastr} from 'react-redux-toastr';
import $ from 'jquery';

class AppToastr {
  constructor() {
    toastr.options.positionClass = 'dep-toast-top-right'//'toast-top-full-width';
    toastr.options.showEasing = 'swing';
    toastr.options.hideEasing = 'linear';
    toastr.options.showMethod = 'fadeIn';
    toastr.options.hideMethod = 'fadeOut';

  }
  success(message, title = '') {
    toastr.success(message, title);
  }
  error(message, title = '') {
    toastr.error(message, title);
  }
  errorObject(error) {
    if (typeof (error.response) !== 'undefined') {
      typeof (error.response.data) !== 'undefined' ?
        toastr.error(error.response.data.error.message, error.response.data.error.status) : null
    } else {
      toastr.error(error)
    }
  }
  warning(message, title = '') {
    toastr.warning(message, title);
  }
  info(message, title = '') {
    toastr.info(message, title);
  }
}

export default new AppToastr();
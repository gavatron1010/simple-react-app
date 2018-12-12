import * as React from "react";
import { withRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';

const errorGoogle = (response) => {
  console.log('errorGoogle');
}

class AuthButton extends React.Component {

  constructor() {
    super();
    this.successGoogle = this.successGoogle.bind(this)
  }

  successGoogle(props) {
    this.props.login({'profileObj':props.profileObj, 'tokenObj':props.tokenObj})
  }

  render() {
    return(

      this.props.isAuthenticated ? (
        <div>
          <button
            onClick={() => {
              this.props.logout()
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>

        <GoogleLogin
          clientId="<your-google-app-client-id>"
          buttonText="Login"
          onSuccess={this.successGoogle}
          onFailure={errorGoogle}
          />
        </div>
      )

    )
  }

}
export default withRouter(AuthButton);

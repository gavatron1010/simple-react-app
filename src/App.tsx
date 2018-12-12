import * as React from "react";
import { BrowserRouter, Link, Route, RouteProps, Switch, Redirect, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { getUser, setProfile } from './actions';
import GoogleLogin from 'react-google-login';
import { Home, Profile, List } from "./components";
import AuthButton from "./components/AuthButton";
import { Modal, Child } from "./Modal"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      isFetching: false,
      showModal: false,
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.loadUser = this.loadUser.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // Modal Portal
    if(!this.state.isAuthenticated) this.setState({showModal: !this.state.showModal})
  }

  login(profile) {
    this.setState({isAuthenticated: true})
    this.props.dispatch(setProfile(profile))
  }

  logout() {
    this.setState({isAuthenticated: false})
  }

  loadUser() {
    this.props.dispatch(getUser())
  }

  render() {
    return(
      <BrowserRouter>
        <div>

          <div>
          <Route
            render={() => (
              <AuthButton {...this.state} login={this.login} logout={this.logout} />
            )}
          />
          </div>

          <div onClick={this.handleClick}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>

            <Modal>
              <Child showModal={this.state.showModal} />
            </Modal>
          </div>

          <div>
            <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} />
              )}
            />
            <Route
              path="/profile"
              render={props =>
                this.state.isAuthenticated ? (
                  <Profile {...props} {...this.props.profile} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/",
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
            <Route
              path="/list"
              render={props =>
                this.state.isAuthenticated ? (
                  <List
                    {...props}
                    loadUser={this.loadUser}
                    isFetching={this.props.users.isFetching}
                    users={this.props.users.users}
                  />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/",
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    )
  }
}

App.defaultProps = {
  isFetching: false,
  users: [],
  profile: {},
};

function mapStateToProps(state) {
  const { isFetching, users, profile } = state
  return {
    isFetching,
    users,
    profile
  }
}

export default connect(mapStateToProps)(App)

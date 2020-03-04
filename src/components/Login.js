import React from "react";
import { Redirect } from "react-router-dom";

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
    // binding 'this'
    this.login = this.login.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    const { redirectToReferrer } = this.state;
    console.log("Login -> render -> redirectToReferrer", redirectToReferrer);

    if (redirectToReferrer) {
      return <Redirect to={from} />;
      console.log("Login -> render -> from", from);
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';


export var Login = React.createClass({

  onLogin() {
    var { dispatch } = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">My Todos</h1>
        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="callout callout-auth">
              <h3>Sign In</h3>
              <p>Sign In with GitHib</p>
              <button className="button" onClick={this.onLogin}>Sign In with GitHib</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);

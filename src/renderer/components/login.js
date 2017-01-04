var electron = window.require('electron');
var ipcRenderer = window.require('electron').ipcRenderer;
var remote = electron.remote;
var BrowserWindow = remote.BrowserWindow;

import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions';
import Constants from '../utils/constants';

export class LoginPage extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   const isLoggedIn = nextProps.token !== null;
  //   if (isLoggedIn) {
  //     ipcRenderer.send('reopen-window');
  //     debugger;
  //     console.log('logged in!')
  //     // this.context.router.push('/notifications');
  //   }
  // }

  authGithub () {
    var self = this;

    //Build the OAuth consent page URL
    var authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: true,
      webPreferences: {
        nodeIntegration: false
      }
    });
    var githubUrl = 'https://github.com/login/oauth/authorize?';
    var authUrl = githubUrl + 'client_id=' + Constants.CLIENT_ID + '&scope=' + Constants.SCOPE;
    authWindow.loadURL(authUrl);

    function handleCallback (url) {
      var raw_code = /code=([^&]*)/.exec(url) || null;
      var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
      var error = /\?error=(.+)$/.exec(url);

      // if (code || error) {
      //   // Close the browser if code found or error
      //   authWindow.destroy();
      // }

      // If there is a code, proceed to get token from github
      if (code) {
        self.requestGithubToken(code);
      } else if (error) {
        alert('Oops! Something went wrong and we couldn\'t ' +
          'log you in using Github. Please try again.');
      }
    }

    // If "Done" button is pressed, hide "Loading"
    authWindow.on('close', function () {
      authWindow.destroy();
    });

    authWindow.webContents.on('will-navigate', function (event, url) {
      handleCallback(url);
    });

    authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
      handleCallback(newUrl);
    });
  }

  requestGithubToken(code) {
    this.props.loginUser(code);
  }

  render() {
    return (
      <div className="container-fluid main-container login">
        <div className="row">
          <div className="offset-xs-2 col-xs-8">
            <div className="desc">Git in the Game!</div>
            <button className="btn btn-lg btn-block" onClick={this.authGithub.bind(this)}>
              <i className="fa fa-github" />Log in to GitHub
            </button>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    response: state.auth.response,
    failed: state.auth.failed,
    isFetching: state.auth.isFetching
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);

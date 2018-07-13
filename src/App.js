import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Body from './containers/Body';
import './App.css';

class App extends Component {
  render() {
    const { location, isAuthenticated, loaded, lang } = this.props;
    return (
      <IntlProvider locale={lang}>
        <React.Fragment>
          <Header />
          <Body />
        </React.Fragment>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.user.lang
  };
};
export default withRouter(connect(mapStateToProps)(App));

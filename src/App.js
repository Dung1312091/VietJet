import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Body from './containers/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <IntlProvider locale={'en'}>
        <React.Fragment>
          <Header />
          <Body />
        </React.Fragment>
      </IntlProvider>
    );
  }
}

export default App;

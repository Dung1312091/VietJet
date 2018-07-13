import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile';
import Test from '../../components/Text';
import DashBoard from '../DashBoard';
import DashBoardContend from '../../containers/DashBoardContent';
class Body extends Component {
  render() {
    return (
      // <Switch>
      //   <Route exact path="/a" component={UserProfile} />
      //   <Route exact path="/" component={DashBoard} />
      // </Switch>
      <DashBoard>
        <Switch>
          <Route exact path="/" component={DashBoardContend} />
          <Route exact path="/user" component={UserProfile} />
        </Switch>
      </DashBoard>
    );
  }
}
export default Body;

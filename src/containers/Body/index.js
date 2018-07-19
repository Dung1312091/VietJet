import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../DashBoard';
import DashBoardContend from '../../containers/DashBoardContent';
import Login from '../../components/Login';
import UserProfile from '../../containers/UserProfile';
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      // <Switch>
      //   <Route exact path="/a" component={UserProfile} />
      //   <Route exact path="/" component={DashBoard} />
      // </Switch>
      // <DashBoard>
      //   <Switch>
      //     <Route exact path="/" component={DashBoardContend} />
      //     <Route exact path="/user" component={UserProfile} />
      //   </Switch>
      // </DashBoard>
      <div>
        {isLogin ? (
          <DashBoard>
            <Switch>
              <Route exact path="/abc" component={UserProfile} />
              <Route exact path="/" component={DashBoardContend} />
            </Switch>
          </DashBoard>
        ) : (
          <Route exact path="/login" component={Login} />
        )}
      </div>
    );
  }
}
export default Body;

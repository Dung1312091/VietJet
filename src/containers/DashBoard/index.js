import React, { Component } from 'react';
import { Icon } from 'react-fa';
import Avartar from '../../components/Avartar';
import LeftSideBar from '../../components/LeftSideBar';
import './style.css';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      isCollapse: false,
      isAnimation: false,
      src: 'https://vegiagoc.com/Upload/images/Vietjets_cabin_crew_on_duty.jpg',
      isMobile: false
    };
  }
  handleCollapse = () => {
    this.setState(pre => ({
      isCollapse: !pre.isCollapse,
      isAnimation: true
    }));
  };
  handleClose = () => {
    this.setState({
      isCollapse: false
    });
  };
  render() {
    const { isCollapse, isAnimation } = this.state;
    return (
      <div className="wrapper ">
        <div className={`leftSideBar ${isCollapse ? 'colapse' : ''}`}>
          <ul>
            <li style={{ marginBottom: 50 }} className="profile">
              <div>
                <Avartar
                  src={this.state.src}
                  handleClick={this.handleCollapse}
                />
                <div className="profileInfo">
                  <p className="menuText">Hello, Ngoc Trinh</p>
                  <p className="textProfile">Setting</p>
                </div>
              </div>
            </li>
            <li className="dashBoard">
              <div className="routerLink">
                <Icon name="slack" className="icon" />
                <span className="menuText">Dashboard</span>
                {/* <Ink style={{ color: 'black' }} /> */}
              </div>
            </li>
            <LeftSideBar />
          </ul>
        </div>
        <div className="rightCnt ">
          <div
            className={`overlay ${
              this.state.isCollapse ? 'overlay-transition' : ''
            }`}
            onClick={this.handleCollapse}
          />
          <div style={{ marginLeft: 50 }}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default DashBoard;

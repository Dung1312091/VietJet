import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avartar from '../../components/Avartar';
import LeftSideBar from '../../components/LeftSideBar';
import { togleLeftSideBar } from '../../components/Header/action';
import './style.css';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
      src: 'https://vegiagoc.com/Upload/images/Vietjets_cabin_crew_on_duty.jpg',
      isMobile: false
    };
  }
  handleCollapse = () => {
    this.props.handleCollapse();
  };
  // handleClose = () => {
  //   this.setState({
  //     isCollapse: false
  //   });
  // };
  render() {
    const { isCollapse } = this.props;
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
            {/* <li className="dashBoard">
              <div className="routerLink">
                <Icon name="slack" className="icon" />
                <span className="menuText">Dashboard</span>
                <Ink style={{ color: 'black' }} />
              </div>
            </li> */}
            <LeftSideBar />
          </ul>
        </div>
        <div className="rightCnt ">
          <div
            className={`overlay ${isCollapse ? 'overlay-transition' : ''}`}
            onClick={this.handleCollapse}
          />
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    isCollapse: state.handleCollapse.isCollapse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleCollapse: () => {
      dispatch(togleLeftSideBar());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);

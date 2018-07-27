import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom';
import './style.css';
const listMenu = [
  {
    group: 'REPORT',
    menuItem: [
      {
        name: 'Filight Report',
        linkTo: '/',
        icon: 'fighter-jet'
      },
      {
        name: 'Ground Performantce',
        linkTo: '/user',
        icon: 'fighter-jet'
      },
      {
        name: 'EFB Bin',
        linkTo: '/abc',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'MANAGEMENT',
    menuItem: [
      {
        name: 'VIP Management',
        linkTo: '/abcd',
        icon: 'fighter-jet'
      },
      {
        name: 'NTL Management',
        linkTo: '/abcde',
        icon: 'fighter-jet'
      },
      {
        name: 'Airport Management',
        linkTo: '/abcdef',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Management',
        linkTo: '/abcdefg',
        icon: 'fighter-jet'
      },
      {
        name: 'Groups & Sites',
        linkTo: '/abcdefgh',
        icon: 'fighter-jet'
      },
      {
        name: 'Account Management',
        linkTo: '/abcdefghj',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'UTILITIES',
    menuItem: [
      {
        name: 'MCC schedule',
        linkTo: '/abcdefghjk',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Assiignment',
        linkTo: '/abcdefghjkm',
        icon: 'fighter-jet'
      }
    ]
  }
];
export class LeftSideBar extends Component {
  renderGroupMenu = () => {
    return listMenu.map((gr, i) => {
      return (
        <React.Fragment key={i}>
          <li className="groupMenu">
            <span className="groupMenuText menuText">{gr.group}</span>
          </li>
          {this.renderMenu(gr.menuItem)}
        </React.Fragment>
      );
    });
  };
  renderMenu = (menuList, i) => {
    return menuList.map((e, i) => {
      return (
        <li key={i}>
          <NavLink
            to={e.linkTo}
            activeClassName="active"
            className="routerLink">
            <Icon name={e.icon} className="icon" />
            <span className="menuText">{e.name}</span>
            {/* <Ink style={{ color: 'black' }} /> */}
          </NavLink>
        </li>
      );
    });
  };
  render() {
    return <div className="listMenu">{this.renderGroupMenu()}</div>;
  }
}

export default LeftSideBar;

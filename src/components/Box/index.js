import React, { Component } from 'react';
import './style.css';
export class Box extends Component {
  render() {
    const { className, style, children } = this.props;
    return (
      <div className={`box ${className}`} style={style}>
        {children}
      </div>
    );
  }
}

export default Box;

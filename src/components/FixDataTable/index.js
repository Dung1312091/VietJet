import React, { Component } from 'react';
import './style.css';
const listData = [];
for (let i = 0; i < 100; i++) {
  listData.push(i);
}
class FixedDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }
  render() {
    return (
      <div>
        <div className="a">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>FLIGHT NO.</th>
                <th>STD</th>
                <th>STA</th>
                <th>ATD</th>
                <th>ATA</th>
                <th>ROUTE</th>
                <th>GATE</th>
                <th>TAI</th>
                <th>BAY</th>
                <th>PAX</th>
                <th>DRCLSD</th>
                <th>TYPE</th>
                <th>A/CREGSN</th>
                <th>A/CTYPE</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((item, index) => {
                return (
                  <tr key={index}>
                    <th ref={ref => (this.tdFist = ref)}>Argentina</th>
                    <td>Spanish </td>
                    <td>41,803,125</td>
                    <td>31.3</td>
                    <td>2,780,387</td>
                    <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                    <td>Spanish </td>
                    <td>41,803,125</td>
                    <td>31.3</td>
                    <td>2,780,387</td>
                    <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                    <td>Spanish </td>
                    <td>41,803,125</td>
                    <td>31.3</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FixedDataTable;

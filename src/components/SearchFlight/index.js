import React, { Component } from 'react';
import { Icon } from 'react-fa';
import DateRangePickers from '../../components/DateRangePicker';
import InputTabComplete from '../../components/InputTabComplete';
import MutilOrSingleSelected from '../../components/MutilSelected';
import './style.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
export class SearchFlight extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className=" col-md-6 col-sm-6 col-xs-12 searchFlight">
            <div className=" col-md-2 col-sm-2 col-xs-2">
              <p>FLT NO:</p>
              <p>All</p>
            </div>
            <div className=" col-md-1 col-sm-1 col-xs-1">
              <p>ROUTE</p>
              <p>All</p>
            </div>
            <div className=" col-md-2 col-sm-2 col-xs-2">
              <p>DOF</p>
              <p>Tay</p>
            </div>
            <div className=" col-md-2 col-sm-2 col-xs-2">
              <p>FROM</p>
              <p>STD 12:30</p>
            </div>
            <div className=" col-md-2 col-sm-2 col-xs-2">
              <p>STATUS</p>
              <p>...</p>
            </div>
            <div className=" col-md-2 col-sm-2 col-xs-2">
              <span>L</span>
              <span>E</span>
            </div>
            <div className=" col-md-1 col-sm-1 col-xs-1">
              <Icon name="search" className="icon" />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-6 col-xs-12 ">
            <DateRangePickers />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputTabComplete />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <MutilOrSingleSelected
              options={options}
              isMulti={false}
              isClearable={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchFlight;

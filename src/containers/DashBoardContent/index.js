import React, { Component } from 'react';
import Box from '../../components/Box';
import SearchFlight from '../../components/SearchFlight';
import FixedDataTable from '../../components/FixDataTable';
import Sortable from '../../components/Sortable';
import './style.css';
export class DashBoardContend extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-6">
            <Box>
              <div>
                <h2>VJ982</h2>
              </div>
            </Box>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <Box className="boderBlue">
              <div className="displayFlex">
                <div>
                  <h5>TYPE</h5>
                  <p>S</p>
                </div>
                <div>
                  <h5>DOF</h5>
                  <p>May 13, 2018</p>
                </div>
                <div>
                  <p>E</p>
                </div>
              </div>
            </Box>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <Box className="boderBlue">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">NTL & VIP</div>
                <div className="col-md-3 col-sm-3 col-xs-12">SHI</div>
                <div className="col-md-3 col-sm-3 col-xs-12">Message</div>
                <div className="col-md-3 col-sm-3 col-xs-12">Loadsheet</div>
              </div>
            </Box>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card--content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </div>
            <div className="card--content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </div>
            <div className="card--content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </div>
          </div>
        </div>
        <FixedDataTable />
        <div style={{ marginBottom: 20, marginLeft: 30 }}>
          {' '}
          <Sortable />
        </div>

        <SearchFlight />
      </React.Fragment>
    );
  }
}

export default DashBoardContend;

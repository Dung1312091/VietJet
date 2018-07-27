import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import DayPickerRangeControllerWrapper from '../DayPickerRangeControllerWrapper';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
var SelectedStartDate = moment('2018-07-23');
class DateRangePickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: SelectedStartDate
    };
  }
  Clear = () => {
    console.log('aaaa');
    this.setState({
      startDate: SelectedStartDate
    });
  };
  renderCalendarInfo = () => {
    return (
      <div className="calendarInfo">
        <div>
          <p onClick={this.Clear}>Clear</p>
        </div>
        <div>
          <button>Cancel</button>
          <button>Apply</button>
        </div>
      </div>
    );
  };
  // renderMonthElement = (el) => {
  //   console.log('asasas',el);
  //   return(
  //     <div>
  //       AAA
  //     </div>
  //   );
  // }
  renderLableMonth = lable => {
    return lable.slice(0, 3);
  };
  render() {
    const { startDate } = this.state;
    return (
      <div style={{ overflow: 'auto' }}>
        <DayPickerRangeControllerWrapper
          // orientation="vertical"
          minimumNights={0}
          numberOfMonths={2}
          onOutsideClick={this.props.onOutsideClick}
          onPrevMonthClick={this.props.onPrevMonthClick}
          onNextMonthClick={this.props.onNextMonthClick}
          initialStartDate={startDate}
          showInputs={true}
          autoFocusEndDate="endDate"
          renderCalendarInfo={this.renderCalendarInfo}
          renderMonthElement={({ month, onMonthSelect, onYearSelect }) => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <select
                  value={month.month()}
                  onChange={e => {
                    onMonthSelect(month, e.target.value);
                  }}>
                  {moment.months().map((label, value) => (
                    <option key={value} value={value}>
                      {this.renderLableMonth(label)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={month.year()}
                  onChange={e => {
                    onYearSelect(month, e.target.value);
                  }}>
                  <option value={moment().year() - 1}>Last year</option>
                  <option value={moment().year()}>{moment().year()}</option>
                  <option value={moment().year() + 1}>Next year</option>
                </select>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
export default DateRangePickers;

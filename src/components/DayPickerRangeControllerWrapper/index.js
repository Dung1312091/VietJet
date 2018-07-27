import React from 'react';
import moment from 'moment';
import omit from 'lodash/omit';
import { Icon } from 'react-fa';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from './constants';
import isInclusivelyAfterDay from './isInclusivelyAfterDay';
import './style.css';
const defaultProps = {
  // example props for the demo
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
  startDateOffset: undefined,
  endDateOffset: undefined,
  showInputs: false,

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,
  enableOutsideDays: false,

  // calendar presentation and interaction related props
  orientation: HORIZONTAL_ORIENTATION,
  verticalHeight: undefined,
  withPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  onOutsideClick() {},
  keepOpenOnDateSelect: false,
  renderCalendarInfo: null,
  isRTL: false,
  renderMonthText: null,
  renderMonthElement: null,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // internationalization
  monthFormat: 'MMMM YYYY'
};

class DayPickerRangeControllerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }
  onDatesChange({ startDate, endDate }) {
    console.log('startDate', startDate, endDate);
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
  }

  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'showInputs'
    ]);

    // const startDateString = startDate && startDate.format('YYYY-MM-DD');
    // const endDateString = endDate && endDate.format('YYYY-MM-DD');

    return (
      <div style={{ height: '100%' }}>
        <div className="calendar">
          <p>Today</p>
          <Icon name="calendar" />
        </div>
        {showInputs && (
          // <div style={{ marginBottom: 16 }}>
          //   <input type="text" name="start date" value={startDateString} readOnly />
          //   <input type="text" name="end date" value={endDateString} readOnly />
          // </div>
          <DayPickerRangeController
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </div>
    );
  }
}

DayPickerRangeControllerWrapper.defaultProps = defaultProps;
export default DayPickerRangeControllerWrapper;

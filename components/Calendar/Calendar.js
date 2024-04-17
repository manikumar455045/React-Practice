import React, { useRef, useState } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import './Calendar.css'

const CalendarComp = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const calendarRef = useRef();
  const isOutsideRange = (day) => {
    const tomorrow = moment().add(1, "days");
    console.log('day', day.toDate('dd-mm-yyyy'));
    return day < tomorrow;
  };
  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    setFocusedInput('startDate');
  }
  const formatDate = (date) => moment(date).format('DD-MM-YYYY')
  const handleSubmit = () => {
    alert(`Are sure you want look between ${formatDate(startDate)} to ${formatDate(endDate)}`)
  }
  return (
    <>
    <section className="container">
    <div className='calendar-wrapper'>
      <h3 className="headline">Pick Your dates</h3>
      <div className="calendar-dates">
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date"
        endDate={endDate}
        endDateId="end_date"
        focusedInput={focusedInput}
        onFocusChange={(focusedInputBox) => {
          setFocusedInput(focusedInputBox);
        }}
        onDatesChange={({ startDate, endDate }) => {
          setEndDate(endDate);
          setStartDate(startDate);
        }}
        isOutsideRange={isOutsideRange}
        showClearDates
      reopenPickerOnClearDates
      keepOpenOnDateSelect
      hideKeyboardShortcutsPanel
      renderCalendarInfo={() => (
        <button style={{margin: '12px'}}onClick={clearDates}>clear dates</button>
      )}
      />
      <button className="btn-submit" onClick={handleSubmit} disabled={!(startDate && endDate)}>Submit</button>
      </div>
      </div>
    </section>   
    </>
  );
};

export default CalendarComp;

import React, { useRef, useState } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import './Calendar.css';
import badge from '../../Assets/badge.jpg';

const CalendarComp = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const calendarRef = useRef();
  const isOutsideRange = (day) => {
    const tomorrow = moment().add(1, "days");
    console.log('day', moment(day).month() > 4);
    return !(moment(day).month() > 3);
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
    <div style={{display: 'flex', marginTop: '8px', alignItems: 'center', flexDirection: 'column', width: '250px', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}> 
    <div style={{width: '250px', height: '250px', overflow: 'hidden', borderRadius: '15px 15px 0 0'}}>
      <img src={badge} style={{width: '100%', height: '100%'}}/>
    </div>
    <h2 className="dashed">Mani Kumar</h2>
    <div className="dashed">Senion Experience Engineer</div>
    <div style={{padding: '8px'}}>Publicis Sapient</div>
    </div>
    </>
  );
};

export default CalendarComp;
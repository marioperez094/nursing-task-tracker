import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//Context
import { useTheme } from '../../context/ThemeContext'; 

function TimeLine(props) {
  const { theme } = useTheme();

  const { showPastTasks, currentHour } = props;

  return (
    <div className='d-flex justify-content-evenly hour-bar'>
      <button
        className={`btn-hour ${theme}-primary`}
        onClick={() => showPastTasks(-1)}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='icon-hour'
        />
      </button>
      <div className={`col-8 col-sm-10 ${theme}-primary text-center d-flex align-items-center justify-content-center`}>
        <h5>{currentHour}:00</h5>
      </div>
      <button
        className={`btn-hour ${theme}-primary`}
        onClick={() => showPastTasks(1)}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className='icon-hour'
        />
      </button>
    </div>
  )
};

export default TimeLine;
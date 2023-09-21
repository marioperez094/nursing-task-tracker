//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';


//Context
import { useModal } from '../../context/ModalContext';


function ResetTasks(props) {
  const { setModal, setPatientID } = useModal();
  const { id } = props;

  return (
    <div className='col-12 text-center'>
      <button
        className='btn w-100 btn-success'
        onClick={() => {
          setModal('resetTasks');
          setPatientID(id)
        }}
      >
        <h5><FontAwesomeIcon icon={faCalendarPlus} /> <span>Reset Tasks</span></h5>
      </button>
    </div>
  )
}

export default ResetTasks;
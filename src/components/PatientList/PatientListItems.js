import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

import { useModalContext } from '../../context/ModalContext';

const PatientListItems = (id) => {
  const { setModal, setPatientID } = useModalContext();

  const items = {
    removeItem:
      <button
        className='btn btn-outline-danger btn-patient-home ms-1 me-2 btn-width'
        onClick={() => {
          setModal('removePatient');
          setPatientID(id);
        }}
      >
        <h5>&times;</h5>
      </button>,
    roomLink:
        <Link 
          to='/'
          className='btn btn-outline-secondary btn-patient-home d-flex align-items-center justify-content-center'
        >
          <span>
            <h4 className='d-none d-md-inline'>
              Room #
            </h4>
            <h4 className='d-md-none'>
              RM#
            </h4>
            <h5>{ id }</h5>
          </span>
        </Link>,
      addTask:
        <button
          className='btn btn-outline-success btn-patient-home btn-width'
          onClick={() => {
            setModal('addTask');
            setPatientID(id);
          }}
        >
          <h4>
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              style={{ color: "#198754" }} />
          </h4>
        </button>
  }
  return items
}

export default PatientListItems;


//External Imports
import React from 'react';

//Context
import { useModal } from '../context/ModalContext'
import { useTheme } from '../context/ThemeContext'

//Style
import './Modals.css'

const ModalTemplate = (props) => {
  const { theme } = useTheme();
  const { setModal } = useModal();

  const { title } = props;

  return (
    <div
      className='modal'
      onClick={() => setModal('false')}
    >
      <div
        className={`${theme}-body modal-box`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='exit-button text-end'>
          <button
            className='btn-circular d-flex align-items-center justify-content-center'
            id='btn-exit-modal'
            onClick={() => setModal('false')}
          >
            &times;
          </button>
        </div>
        <div className={`${theme}-title text-center`}>
          <div className={`${ theme }-body`}>
          <h2>{title}</h2>
          </div>
        </div>
        <div className='modal-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ModalTemplate;
//External Imports
import React from 'react';

//Functions
import { useModalContext } from '../../context/ModalContext'
import { useThemeContext } from '../../context/ThemeContext'

//Style
import './ModalTemplate.css'

const ModalTemplate = (props) => {
  const { title, shakeModal } = props
  const { theme } = useThemeContext();
  const { setModal } = useModalContext();


  return (
    <div 
      className='modal'
      onClick={() => setModal('false')}
    >
      <div 
        className={ `${ theme }-body modal-box ${ shakeModal }` }
        onClick={(e) => e.stopPropagation()}  
      >
        <div className='exit-button text-end'>
          <button
            className='btn-exit-modal btn-circular d-flex align-items-center justify-content-center'
            onClick={() => setModal('false')}
          >
            &times;
          </button>
        </div>
        <div className={ `${ theme }-title text-center` }>
          <h2>{ title }</h2>
        </div>
        <div className='modal-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ModalTemplate;
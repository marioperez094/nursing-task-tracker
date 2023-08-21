import React from 'react';

const ModalTemplate = (props) => {
  const { title, onExitEvent, theme } = props

  return (
    <div
      className='modal'
      onClick={() => onExitEvent()}
    >
      <div
        className={`${theme}-body modal-box`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='exit-button text-end'>
          <button
            className='btn'
            onClick={() => onExitEvent('false')}
          >
            <h5>
              &times;
            </h5>
          </button>
        </div>
        <div className={`${theme}-title text-center`}>
          <h2>{title}</h2>
        </div>
        <div className='modal-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ModalTemplate;
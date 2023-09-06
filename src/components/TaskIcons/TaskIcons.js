import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faMortarPestle, faList, faUserClock, faUserNurse, faCheck } from '@fortawesome/free-solid-svg-icons'

import { useThemeContext } from '../../context/ThemeContext'

import './TaskIcons.css'

const TaskIcons = (props) => {
  const { tasks, type } = props;
  const { theme } = useThemeContext();

  const icon = () => {
    switch (type) {
      case 'all':
        return faList;
      case 'meds':
        return faMortarPestle;
      case 'chart':
        return faClipboard;
      case 'clock':
        return faUserClock;
      case 'personal':
        return faUserNurse;
    }
  }

  return (
    <React.Fragment>
      <div>
        <div className={`icon-border ${ theme }-border d-flex justify-content-center align-items-center`}>
          <h2>
            <FontAwesomeIcon
              icon={icon()}
              style={{ color: `${ theme === 'blue' ? '#4480bc' : '#8553b8'}` }}
            />
          </h2>
        </div>
        <div className={`length-border ${ theme }-border d-flex justify-content-center align-items-center m-0`}>
          { tasks.length > 0
            ? <h6>{ tasks.length }</h6>
            : <h6><FontAwesomeIcon icon={ faCheck } style={{ color: '#198754'}}/></h6>
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default TaskIcons;
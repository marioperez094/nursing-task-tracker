import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { useModalContext } from '../../context/ModalContext'

import './NavBarButton.css'


const NavBarButton = (props) => {
  const { icon, modalState } = props;
  const { setModal } = useModalContext();

  return (
    <>
      <button
        className='btn-navbar btn-circular'
        onClick={() => setModal(modalState)}
      >
        <FontAwesomeIcon 
          className='icon-navbar'
          icon={
            icon === 'faUserPlus' 
            ? faUserPlus
            : faFileCirclePlus
          } 
        />
      </button>
    </>
  )
}

export default NavBarButton;
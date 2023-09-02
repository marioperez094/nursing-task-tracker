//Functions
import { useModalContext } from '../../context/ModalContext'

//Style
import './SidebarButton.css'

function SidebarButton (props) {
  const { modal } = useModalContext();

  const { id } = props;

  return(
    <div className={ modal === id ? 'btn-sb-active' : null }>
      { props.children }
    </div>
  )
}

export default SidebarButton;
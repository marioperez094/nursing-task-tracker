//Functions
import { useModalContext } from '../../context/ModalContext'

//Style
import './SidebarButton.css'

function SidebarButton (props) {
  const { id } = props;

  return(
    <div>{id}</div>
  )
}

export default SidebarButton;
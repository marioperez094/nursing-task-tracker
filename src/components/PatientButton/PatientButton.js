//Functions
import { useModalContext } from '../../context/ModalContext'
import { useThemeContext } from '../../context/ThemeContext';

//Style
import './PatientButton.css'

function PatientButton (props) {
  const { patientID, setPatientID } = useModalContext();
  const { theme } = useThemeContext();
  const { id } = props;

  return(
    <div className={ `${ patientID === id ? 'btn-sb-active' : 'btn-sb ' + theme + '-primary' }` }>
      <button
        className={`btn-circular ${ patientID === id ? 'btn-pt-active ' + 'btn-' + theme : 'btn-pt' }`}
        onClick={() => setPatientID(id)}
      >
        <h5>{ id }</h5>
      </button>
    </div>
  )
}

export default PatientButton;
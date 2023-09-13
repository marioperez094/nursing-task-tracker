import { useParams } from "react-router-dom";

function Patient (props) {
  const { patientRoom } = useParams();

  console.log(patientRoom);
  return (
    <div>{ patientRoom }</div>
  )
}

export default Patient;
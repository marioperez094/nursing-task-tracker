import { useParams } from "react-router-dom";

function Patient (props) {
  const { patientRoom } = useParams();

  console.log(patientRoom);
  return (
    <div>Hi</div>
  )
}

export default Patient;
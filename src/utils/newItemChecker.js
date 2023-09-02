import { faL } from "@fortawesome/free-solid-svg-icons";

const titleCheck = (title) => {
  if (!title) {
    return true
  }
  return false;
}

const duplicateCheck = (id, patientList) => {
  const filter = patientList.filter((patient) => patient.id === id);
  if (filter.length > 0) {
    return true
  }
  return false;
}

export { titleCheck, duplicateCheck }
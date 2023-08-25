import duplicateCheck from "./duplicateCheck";

const newItemChecker = (id, patients) => {

  if (!id) {
    return 'Please include a room number.';
  }

  if (patients.length > 9) {
    return 'Patient limit is 10.';
  }

  if (duplicateCheck(patients, id)) {
    return `Patient ${ id } is already in use.`
  }

  return false;
}

export default newItemChecker;
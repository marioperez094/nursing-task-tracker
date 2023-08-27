import duplicateCheck from "./duplicateCheck";

const newItemChecker = (id, patients, type) => {

  if (!id) {
    return 'Please include a ' + type + ' identifier';
  }

  if (patients.length > 9) {
    return 'Patient limit is 10.';
  }

  if (duplicateCheck(patients, id)) {
    return `${type} ${ id } is already in use.`
  }

  return false;
}

export default newItemChecker;
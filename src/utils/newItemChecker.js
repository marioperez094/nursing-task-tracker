const titleCheck = (title) => {
  let bool = !title && true;
  return bool;
}

const duplicateCheck = (id, patientList) => {
  const filter = patientList.filter((patient) => patient.id === id);
  let bool = filter.length > 0 && true;
  return bool;
}

export { titleCheck, duplicateCheck }
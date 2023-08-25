const storage = (name, unChanged) => {
  let local = localStorage.getItem(name);

  if (name === 'NTTpatients') {
    local = JSON.parse(local);
  }
  
  if (local) {
    return local;
  }
  else return unChanged
}

export default storage;
const storage = (name, unChanged) => {
  const local = localStorage.getItem(name);
  if (local) {
    return local;
  }
  else return unChanged
}

export default storage;
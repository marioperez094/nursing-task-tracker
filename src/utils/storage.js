function storage (name, preset) {
  let local = localStorage.getItem(name);

  if (local) {
    return (
      name === 'NTTpatients'
      ? JSON.parse(local)
      : local
    );
  }

  else return preset;
}

export default storage;
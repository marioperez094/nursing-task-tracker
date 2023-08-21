const dateTime = () => {
  const d = new Date();
  const currentTime = [d.getMonth() + 1, d.getDate(), d.getFullYear(), d.getHours(), d.getMinutes(), d.getSeconds()]

  return currentTime;
}

export default dateTime;
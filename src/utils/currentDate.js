import addZero from "./addZero";

const currentDate = () => {
  const d = new Date();
  const dateArray = [d.getMonth() + 1, d.getDate(), d.getFullYear(), d.getHours(), addZero(d.getMinutes()), addZero(d.getSeconds())]

  return dateArray;
}

export default currentDate;
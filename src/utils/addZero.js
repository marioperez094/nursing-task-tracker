//Adds zeroes to single digit numbers
function addZero (num) {
  if (num.toString().length < 2) {
    return '0' + num;
  };
  return num;
}
export default addZero;
const duplicateCheck = (array, id) => {

  let itemID = array.filter((arr) => {
    return arr.id === id;
  });

  return itemID.length > 0;
}

export default duplicateCheck;
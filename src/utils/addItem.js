function changeAttributes (object, key, property) {
  let clone = Object.assign({}, object);
  clone[key] = property;

  return clone;
}

export { changeAttributes }
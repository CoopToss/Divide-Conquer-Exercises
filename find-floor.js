function findFloor() {
  let floor = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= num) {
      floor = arr[i];
    } else {
      break;
    }
  }
    return floor;
}

module.exports = findFloor
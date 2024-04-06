function findRotatedIndex() {
   let rotatedIndex = -1;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === num) {
         rotatedIndex = i;
         break;
      }
    }
    return rotatedIndex;
}

module.exports = findRotatedIndex
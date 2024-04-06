function findRotationCount() {
  let rotationcount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
        rotationcount = i + 1;
        break;
        }
    }
    return rotationcount;
}

module.exports = findRotationCount
function countZeroes() {
    let counter = 0;
    for(let i = arr.length -1; i >= 0; i--) {
        if(arr[i] === 0) {
            counter++;
        } else {
            break;
        }
    }
    return counter;
}

module.exports = countZeroes
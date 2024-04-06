function sortedFrequency() {
    let sortedFrequency = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            sortedFrequency++;
        }
    }   
    return sortedFrequency;
}

module.exports = sortedFrequency
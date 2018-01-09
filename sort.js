nums = [57,50,12,17,89.9,50,60,4,17,19,18,3,3]

function sortNums(arr){
    var newList = []
    var temp_nums = arr.slice(0)
    var rounds = 0
    do {
        for (var i = 0; i <= arr.length-1; i++) {
            if (temp_nums.every(num => num <= arr[i])){
                    temp_nums.splice(i,1)
                    newList.splice(0,0,arr[i])
                    arr=temp_nums.slice(0)
                }
            }
        }
    while (rounds < arr.length);
    return newList
}
console.log(sortNums(nums))
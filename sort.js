nums = [57,50,12,17,89.9,50,60,4,17,19,18,3,3]

// Method 1
function testEvery(checkList,val){
    for (var n in checkList){
        if (checkList[n] > val) {
            return false
        }
    }
    return true
}
// function sortNums(arr,ascending=false){
//     var newList = []
//     var tempNums = arr.slice(0)
//     while (arr.length > 0){
//         for (var i = 0; i <= arr.length-1; i++) {
//             if (tempNums.every(num => num <= arr[i])){
//                     tempNums.splice(i,1)
//                     ascending ? newList.unshift(arr[i]) : newList.push(arr[i])
//                     arr=tempNums.slice(0)
//             }
//         }
//     }
//     return newList
// }

function sortNums(arr,ascending=false){
    var newList = []
    var tempNums = arr.slice(0)
    while (arr.length > 0){
        console.log(arr.length)
        for (var i = 0; i <= arr.length-1; i++) {
            if (testEvery(tempNums,arr[i])){
                    tempNums.splice(i,1)
                    ascending ? newList.unshift(arr[i]) : newList.push(arr[i])
                    arr=tempNums.slice(0)
            }
        }
    }
    return newList
}

// Method 2
var swap = function(arr,index1,index2){
    var tmp = arr[index1];
    arr[index1]= arr[index2]
    arr[index2]=tmp
    tmp=null
}

var sort = function(arr){
  var len = arr.length
    for (var i=0;i<len; i++){
        for (var j=0; j<len; j++){
            if (arr[i]>arr[j]){
                swap(arr,i,j)
            }
        }
    }
    return arr
}

console.log(sortNums(nums,ascending=true))
console.log(sortNums(nums))
// Example 1
// Reduce array to sum
var nums = [1,2,3,4,5]
var out = nums.reduce(function(accumulator,currVal){
    return accumulator + currVal
},0)
console.log(out)

// Example 2
// Reduce 2D to 1D
var twoDArray = [[1, 2], [3, 4], [5, 6], [7, 8]];
var out = twoDArray.reduce(function(accumulator,currVal){
    return accumulator.concat(currVal)
},[])
console.log(out)

// Example 3
// use reduce to find the total cost 
var transactions = [
    {id: 0, cost: 5},
    {id: 1, cost: 11},
    {id: 2, cost: 13},
    {id: 3, cost: 2}]
var out = transactions.reduce(function(total,currVal){
    return total + currVal["cost"]
},0)
console.log(out)

// Example 4
// Reduce to the largest
var numbers = [38,2, 5, 4, 8, 3.7, 11, 9, 22, 38]
var out = numbers.reduce(function(largestNum,currVal){
    return currVal >= largestNum ? currVal : largestNum
},0)
console.log(out)

// Example 5
// Reduce 3D to 1D array
var threeDArray = [[[1, 2], [3, 4]],[[5, 6], [7, 8]], [[9, 10], [11, 12]]];
var out = threeDArray.reduce(function(accumulator, currVal){
    return accumulator.concat(currVal)
}).reduce(function(finalList,currList){
    return finalList.concat(currList)
})
console.log(out)
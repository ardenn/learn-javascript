var arr = [1,13,24,55,68,34,59,44]

//Version 1
var checkEven = function(num){
    return num%2 === 0
}
console.log(arr.filter(checkEven))

//Version 2
newList = []
arr.forEach(function(score){
    if (score % 2 === 0){
        newList.push(score)
    }
})
console.log(newList)

//Example 2
var forecast = [
{day: "Monday",rain:false},
{day: "Tuesday",rain:true},
{day: "Wednesday",rain:true},
{day: "Thursday",rain:false},
{day: "Friday",rain:true},
{day: "Saturday",rain:false},
{day: "Sunday",rain:false}
]

var checkRain = function(item){
    return item.rain
}
console.log(forecast.filter(checkRain))
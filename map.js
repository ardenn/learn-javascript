var forecast = [
{day: "Monday",rain:false,humidity:100},
{day: "Tuesday",rain:true,humidity:100},
{day: "Wednesday",rain:true,humidity:100},
{day: "Thursday",rain:false,humidity:25},
{day: "Friday",rain:true,humidity:100},
{day: "Saturday",rain:false,humidity:15},
{day: "Sunday",rain:false,humidity:100}
]

humidity = []
forecast.forEach(function(item){
    humidity.push(item.humidity)
})
console.log(humidity)

var mapHumidity = function(day){
    return day.humidity
}
console.log(forecast.map(mapHumidity))

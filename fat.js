// Using ES6
var doubleUp = num => {
    return num*2
}
// console.log(doubleUp(6))

function compliment(){
    console.log("Arinze is awesome")
}
var people = {
    name: "bigbaby",
    handleGreeting: function(fn){
        fn();
    },
    greet: function(){
        this.handleGreeting(function(){
            console.log(hi)
        })
    }
}

nums = [12,33,67,89]

for (let num of nums){
    console.log(num)
}
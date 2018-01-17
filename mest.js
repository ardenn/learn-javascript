mest = ["Amaka", "Tino", "Tumi", "Cave"]
function print(arr, delimiter){
    var out = ""
    arr.forEach(function(item){
        out+=item
        arr[arr.length-1]!==item ? out+=deli : out
    })
    return out
}
console.log(print(mest,"*"))
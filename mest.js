mest = ["Amaka", "Tino", "Tumi", "Cave"]
function print(arr,deli){
    var out = ""
    arr.forEach(function(item){
        out+=item
        // arr[arr.length-1]!==item ? out+=deli : out 
        if (arr.indexOf(item) < arr.length-1){
            out+=deli
        }
    })
    return out
}
console.log(print(mest,"*"))
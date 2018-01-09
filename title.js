// convert a string to title case
function toTitleCase(item){
    var newList = []
    var list = item.trim().split(" ")
    list.forEach(function(word){
        newList.splice(0,0,word[0].toUpperCase()+word.slice(1).toLowerCase())
    })
    return newList.reverse().join(" ")
}
console.log(toTitleCase("asHwiN said y'All"))
console.log(toTitleCase("MY NAME is bLACH"))
console.log(toTitleCase("hfd,kd kndf fbdbf"))
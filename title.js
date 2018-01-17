// convert a string to title case
function toTitleCase(item){
    var newList = []
    var list = item.trim().toLowerCase().split(" ")
    list.forEach(function(word){
        newList.push(word[0].toUpperCase()+word.slice(1))
    })
    return newList.join(" ")
}
console.log(toTitleCase("asHwiN said y'All"))
console.log(toTitleCase("MY NAME is bLACH"))
console.log(toTitleCase("hfd,kd kndf fbdbf"))
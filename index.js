var names = [" Bright"," Lavet"," Njiiri"," Samuel"," Oriaku"]
var text1 = document.createElement("span")
var text2 = document.createElement("span")
setInterval(function(){
    text1.textContent = names[Math.floor(Math.random()*names.length)]
    text2.textContent = names[Math.floor(Math.random()*names.length)]
}, 2000)

text1.style.fontSize = "50px"
text2.style.fontSize = "50px"
text1.style.color = "red"
text2.style.color = "green"
document.getElementsByTagName("h1")[0].textContent = "What God put together let no man separate"
document.body.appendChild(text1)
document.body.appendChild(text2)
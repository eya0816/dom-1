var box=document.getElementById("color-box")
var btn=document.getElementById("change-color-btn")
console.log(box)
function newcolor(){
    var ch="#"
    var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    for (let i = 0; i < 6; i++) {
       ch=ch+ arr[Math.floor(Math.random()*16)]
        
    }
    console.log(ch)
    return ch
}
btn.addEventListener("click",function(){
    console.log("hgjhjhbknc")
    var str=newcolor()
 box.style.backgroundColor=str

})
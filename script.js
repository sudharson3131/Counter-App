
var increase = document.getElementById("increase")
var counter = document.getElementById("counter")
var decrease = document.getElementById("decrease")
var reset = document.getElementById("reset")

var c=0;
increase.addEventListener("click",function(){
    c++;
    counter.textContent = c;
})

decrease.addEventListener("click",function(){
    c--
    counter.textContent = c;
})

reset.addEventListener("click",function(){
    c = 0;
    counter.textContent = c;

})
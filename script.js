var icon = document.querySelector("#icon");
var nav = document.querySelector("#nav")
icon.addEventListener("click",function(){
    nav.classList.toggle('no')
});
var imagebtn = document.querySelector("#image")
var calc = document.querySelector("#calculator")
imagebtn.addEventListener("click",()=>{
    calc.style.transform = "scale(1)"
})


var theme = document.querySelector("#theme")
var historye = document.querySelector("#history")
var closet = document.querySelector("#close")
closet.addEventListener("click",function(){
  nav.classList.remove('no')
    calc.style.transform = "scale(0)"
    // nav.style.transform = "translate(100%)"
})
var dishis = document.querySelector("#dis-his")
theme.addEventListener("click",function (){
  nav.classList.remove('no')
    dishis.style.display = "block";
});
// historye.addEventListener("click",function(){
//     his();
// });
closet.addEventListener("click",()=>{
    his();
});
//theme
var leftarrow = document.querySelector("#left-arrow");
leftarrow.addEventListener("click",function(){
    dishis.style.display = "none";
 })


var whitecolor = document.querySelector("#white");
var blackcolor = document.querySelector("#black");
var redcolor = document.querySelector("#red");
var purplecolor = document.querySelector("#purple");
var bluecolor = document.querySelector("#blue");
var pinkcolor = document.querySelector("#pink");
var greencolor = document.querySelector("#green");
var aquacolor = document.querySelector("#aqua");
var yellowcolor = document.querySelector("#yellow");

function removeAllThemes() {
  document.body.classList.remove("whitetheme");
  document.body.classList.remove("blacktheme");
  document.body.classList.remove("redtheme");
  document.body.classList.remove("purpletheme");
  document.body.classList.remove("bluetheme");
  document.body.classList.remove("pinktheme");
  document.body.classList.remove("greentheme");
  document.body.classList.remove("aquatheme");
  document.body.classList.remove("yellowtheme");
}

whitecolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("whitetheme");
});

blackcolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("blacktheme");
});

redcolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("redtheme");
});

purplecolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("purpletheme");
});

bluecolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("bluetheme");
});

pinkcolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("pinktheme");
});

greencolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("greentheme");
});

aquacolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("aquatheme");
});

yellowcolor.addEventListener("click", function () {
  removeAllThemes();
  document.body.classList.add("yellowtheme");
});
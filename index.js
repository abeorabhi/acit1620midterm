var man = document.getElementById("main");

var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");

var g1 = document.getElementById("gear1");
var g2 = document.getElementById("gear2");
var g3 = document.getElementById("gear3");

bg1.addEventListener("click", function (){
    man.style.display = "block";
    g1.style.backgroundImage = "url(imgs/gears/h1.png)";
    g2.style.backgroundImage = "url(imgs/gears/h2.png)";
    g3.style.backgroundImage = "url(imgs/gears/h3.png)";
    document.getElementById("head").InnerHTML = "Head Gear";
});

bg2.addEventListener("click", function (){
    man.style.display = "block";
    g1.style.backgroundImage = "url(imgs/gears/b1.png)";
    g2.style.backgroundImage = "url(imgs/gears/b2.png)";
    g3.style.backgroundImage = "url(imgs/gears/b3.png)";
    document.getElementById("head").InnerHTML = "Body Gear";
}); 

bg3.addEventListener("click", function (){
    man.style.display = "block";
    g1.style.backgroundImage = "url(imgs/gears/l1.png)";
    g2.style.backgroundImage = "url(imgs/gears/l2.png)";
    g3.style.backgroundImage = "url(imgs/gears/l3.png)";
    document.getElementById("head").InnerHTML = "Leg Gear";
});

bg4.addEventListener("click", function (){
    man.style.display = "block";
    g1.style.backgroundImage = "url(imgs/gears/f1.png)";
    g2.style.backgroundImage = "url(imgs/gears/f2.png)";
    g3.style.backgroundImage = "url(imgs/gears/f3.png)";
    document.getElementById("head").InnerHTML = "Foot Gear";
});

man.addEventListener("click", function (){
    man.style.display = "none";
});
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var bgText = document.getElementById("bgText");

hnum = 1;
bnum = 1;
lnum = 1;
fnum = 1;

bgText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) {
        if (bgText.value == "combo1") {
            hnum = 1;
            bnum = 1;
            lnum = 1;
            fnum = 1;
            img1.src = "imgs/gears/h1.png";
            img2.src = "imgs/gears/b1.png";
            img3.src = "imgs/gears/l1.png";
            img4.src = "imgs/gears/f1.png";
        } else if (bgText.value == "combo2") {
            hnum = 2;
            bnum = 2;
            lnum = 2;
            fnum = 2;
            img1.src = "imgs/gears/h2.png";
            img2.src = "imgs/gears/b2.png";
            img3.src = "imgs/gears/l2.png";
            img4.src = "imgs/gears/f2.png";
        } else if (bgText.value == "combo3") {
            hnum = 3;
            bnum = 3;
            lnum = 3;
            fnum = 3;
            img1.src = "imgs/gears/ h3.png";
            img2.src = "imgs/gears/b3.png";
            img3.src = "imgs/gears/l3.png";
            img4.src = "imgs/gears/f3.png";
        } else if (bgText.value == "random") {
            hnum = (Math.floor(Math.random() * 3)) + 1;
            bnum = (Math.floor(Math.random() * 3)) + 1;
            lnum = (Math.floor(Math.random() * 3)) + 1;
            fnum = (Math.floor(Math.random() * 3)) + 1;
            img1.src = "imgs/gears/h" + hnum + ".png";
            img2.src = "imgs/gears/b" + bnum + ".png";
            img3.src = "imgs/gears/l" + lnum + ".png";
            img4.src = "imgs/gears/f" + fnum + ".png";
        } else {
            alert("Please type a valid combo!");
        }
    }
});

next.addEventListener("click", function(){
        console.log(c1.checked, c2.checked, c3.checked, c4.checked);
        if (c1.checked) {
            hnum++;
            if (hnum > 3) {
            hnum = 1;
            }
            img1.src = "imgs/gears/h" + hnum + ".png";
        } else if (c2.checked) {
            bnum++;
            if (bnum > 3) {
            bnum = 1;
            }
            img2.src = "imgs/gears/b" + bnum + ".png";
        } else if (c3.checked) {
            lnum++;
            if (lnum > 3) {
            lnum = 1;
            }
            img3.src = "imgs/gears/l" + lnum + ".png";
        } else if (c4.checked) {
            fnum++;
            if (fnum > 3) {
            fnum = 1;
            }
            img4.src = "imgs/gears/f" + fnum + ".png";
        } else {
            alert("Choose an option!");
        }
});

prev.addEventListener("click", function(){
        console.log(c1.checked, c2.checked, c3.checked, c4.checked);
        if (c1.checked) {
            hnum--;
            if (hnum < 1) {
            hnum = 3;
            }
            img1.src = "imgs/gears/h" + hnum + ".png";
        } else if (c2.checked) {
            bnum--;
            if (bnum < 1) {
            bnum = 3;
            }
            img2.src = "imgs/gears/b" + bnum + ".png";
        } else if (c3.checked) {
            lnum--;
            if (lnum < 1) {
            lnum = 3;
            }
            img3.src = "imgs/gears/l" + lnum + ".png";
        } else if (c4.checked) {
            fnum--;
            if (fnum < 1) {
            fnum = 3;
            }
            img4.src = "imgs/gears/f" + fnum + ".png";
        } else {
            alert("Choose an option!");
        }
});
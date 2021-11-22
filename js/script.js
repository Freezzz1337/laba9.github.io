var name = prompt('Як вас звати?');
document.getElementById('text1').innerHTML=name;

var game = 0;

let isEnd = false;

var array = ['img/0.png','img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']

function check(s1, s2, s3) {
    let i1 = document.getElementById(s1).style.backgroundImage;
    let i2 = document.getElementById(s2).style.backgroundImage;
    let i3 = document.getElementById(s3).style.backgroundImage;
    return i1 == i2 && i2 == i3;
}

function nullify() {
    isEnd = false;
}

document.getElementById('button').onclick = function(){

	game ++;

	for (var i = 0; i<9; i = i + 3) {
        var answer = Math.floor(Math.random() * array.length);
        var answer1 = Math.floor(Math.random() * array.length);
        var answer2 = Math.floor(Math.random() * array.length);
        document.getElementById('picture'+i).style.backgroundImage = "url('" + array[answer] + "')";
        while (answer == answer1) {
            answer1 = Math.floor(Math.random() * array.length);
        }
        document.getElementById('picture'+ (i + 1)).style.backgroundImage = "url('" + array[answer1] + "')";
        while (answer == answer2 || answer1 == answer2) {
            answer2 = Math.floor(Math.random() * array.length);
        }
        document.getElementById('picture'+ (i + 2)).style.backgroundImage = "url('" + array[answer2] + "')";
    }

	if (check("picture0", "picture3", "picture6")) isEnd = true;
    if (check("picture1", "picture4", "picture7")) isEnd = true;
    if (check("picture2", "picture5", "picture8")) isEnd = true;
    if (isEnd) {
        alert("You win");
        nullify();
    }
}
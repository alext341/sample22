// piece of code that does one or more actions

var myList = ['Apples', 'Oranges', 'Bananas'];

for (var i = 0; i < myList.length; i++) {
	console.log('you have ' + myList[i] + ' in your basket');
}

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	addSum.innerHTML = "your sum is: " + (one + two);
}

/*
click
mouseenter
mouseleave
mousedown
mouseup
mousemove
keydown
keyup
blur
focus
*/

var simon = document.getElementById('simon');
var simonPic = document.getElementById('simon-pic');
var bruce = document.getElementById('bruce');
var brucePic = document.getElementById('bruce-pic');
var ben = document.getElementById('ben');
var benPic = document.getElementById('ben-pic');

/* simon.addEventListener('click', function () {
	if (simonPic.className === 'hide') {
		simonPic.className = "";
	} else {
		simonPic.className = "hide";
	}
});

bruce.addEventListener('click', function () {
	if (brucePic.className === 'hide') {
		brucePic.className = "";
	} else {
		brucePic.className = "hide";
	}
});

ben.addEventListener('click', function () {
	if (benPic.className === 'hide') {
		benPic.className = "";
	} else {
		benPic.className = "hide";
	}
}); */

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");

	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}
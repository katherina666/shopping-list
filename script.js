var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var remove = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", toggleClassDone);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClassDone(isToggle) {
	//var isToggle = this.classList.toggle("done");
	isToggle.classList.toggle("done");
}


//var item = document.querySelectorAll("li");
	for (i=0; i < item.length; i++) {
		item[i].addEventListener("click",toggleClassDone);
	}

//function toggleDone(listItem) {
    //listItem.classList.toggle('done');
 // }
//document.querySelector("li").classList.toggle("done");



button.addEventListener("click", addListAfterClick);
//item[0].addEventListener("click", toggleDone);
//for (i=0; i < item.length; i++) {
	//j = item[i];
	//j.addEventListener("click", toggleDone(j));
//}


input.addEventListener("keypress", addListAfterKeypress);
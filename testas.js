// JavaScript Document

//Mygtuko paspaudimas viena karta
var btn = document.getElementById("go-button");

function buttonClicked(){
	"use strict";
	console.log("Button clicked");
	btn.removeEventListener("click", buttonClicked);
	document.getElementById("text").innerHTML = "You've clicked on the picture, Good job!";
	console.log(document.getElementById("text"));
}

btn.addEventListener("click", buttonClicked);


//JavaScript Arrays
var hobbies = ["pizza", "gaming", "music", "programming", "reading"];

//Everything in Java script is a Class, (hobbies is a class) and as a class it has methods that we can access (Exmpl (hobbies.pop()), "hobbies" - is a class, .pop - is a method). 

//The pop() method removes the last element from an array:
console.log("I no longer enjoy", hobbies.pop());

// The push() method adds a new element to an array (at the end):
// hobbies.push("archery");

'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

// *************************************

var evenNumber = new Array();
evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[3] = 8;

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

// **************************************

var entrepreneurs = ["Elizabeth Holmes", "Laurene Jobs", "Arianna Huffington"];
var bio = " is the co-founder and editress-in-chief of the Huffington Post";
console.log(entrepreneurs[2] + bio);

// **************************************

function accessElementFromArray(states){
  return states[2];
}

// **************************************

function replaceElementFromArray(names){
  names[1] = "Carter";
}

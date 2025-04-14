"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Leah Thames
      Date: 4/12/25

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");


// Loop through the pieces and add event listeners for dragstart, dragend, dragover, and drop
for (let i = 0; i < pieces.length; i++) {
   pieces[i].addEventListener("dragstart", dragStart);
   pieces[i].addEventListener("dragend", dragEnd);
   pieces[i].addEventListener("dragover", dragOver);
   pieces[i].addEventListener("drop", drop);
    pieces[i].addEventListener("dragenter", movePiece);
    pieces[i].addEventListener("dragleave", dropPiece);


}

// Allow the piece to be dragged
function dragOver(e) {
  e.preventDefault();
  // Set the zIndex style of the piece to be less than any other piece
  this.style.zIndex = --zCounter;


}

// Allow the piece to be dropped
function drop(e) {
   e.preventDefault();
   // Set the zIndex style of the piece to be less than any other piece
   this.style.zIndex = --zCounter;
   // Reset the position of the piece
   this.style.left = pieceX + "px";
   this.style.top = pieceY + "px";
}


// Grab the piece in response to pointerdown event
function dragStart(e) {
   // Store the initial coordinates of the pointerX
   pointerX = e.clientX;
   pointerY = e.clientY;
   // Store the initial coordinates of the puzzle piece
   pieceX = parseInt(this.style.left);
   pieceY = parseInt(this.style.top);
   // Set the zIndex style of the piece to be greater than any other piece
   this.style.zIndex = zCounter++;
}

// Set drop pieces in response to pointerup event
function dragEnd(e) {
   // Set the zIndex style of the piece to be less than any other piece
   this.style.zIndex = --zCounter;
   // Reset the position of the piece
   this.style.left = pieceX + "px";
   this.style.top = pieceY + "px";
  }

  // Allow the piece to be dropped on the puzzle board
function dropPiece ()
{
   // Set the zIndex style of the piece to be less than any other piece
   this.style.zIndex = --zCounter;
   // Reset the position of the piece
   this.style.left = pieceX + "px";
   this.style.top = pieceY + "px";
}

// Remove movement of the piece
function movePiece()
{
  removeEventListener("dragover", movePiece);
  removeEventListener("drop", dropPiece);
}


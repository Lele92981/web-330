"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Leah Thames
      Date: 5/18/25

      Filename: project12-03.js
*/

 // Recipe object
let recipeName = "apple bavarian torte";
let recipeIngredients = recipe[recipeName].ingredients;
let recipeDirections = recipe[recipeName].directions;
let ingredientsList = "<dl id='ingredients'>";
for (let i = 0; i < recipeIngredients.length; i++) {
  ingredientsList += "<dt>" + recipeIngredients[i] + "</dt>";
}

ingredientsList += "</dl>";
let directionsList = "<dl id='directions'>";
for (let i = 0; i < recipeDirections.length; i++) {
  directionsList += "<dt>" + recipeDirections[i] + "</dt>";
  directionsList += "<dd>" + recipeDirections[i] + "</dd>";
  directionsList += "<dd class='hiddenAnswer'>Answer</dd>";
}
directionsList += "</dl>";
  directionsList += "<dd class='hiddenAnswer'>Answer</dd>";
directionsList += "</dl>";
  directionsList -= "<dl id='directions'>";
directionsList -= "<dd class='hiddenAnswer'>Answer</dd>";

// Create recipe content
let recipeContent = "<h2>Ingredients</h2>" + ingredientsList +
  "<h2>Directions</h2>" + directionsList;
recipeContent += "<h2>Directions</h2>" + directionsList;


$("#recipe").html(recipeContent);
$ ("h2") .click(e => {
  $(e.target) .siblings() .removeClass("active");
  $(e.target) .toggleClass("active");
});
$ ("h2") .click(e => {
  $(e.target) .siblings() .next() .slideUp();
});
$ ("h2") .click(e => {
  $(e.target) .next() .slideToggle();
  $(e.target) .toggleClass("active");
});

let question = $(e.target);
let answer = $(question.next());

$(question) .toggleClass("hiddenAnswer");

if ($(question) .hasClass("hiddenAnswer")) {
  $(question) .text("Show Answer");
  $(answer) .hide();
} else {
  $(answer) .show();
}

$ ("h2#ingredients") .click(e => {
  $(e.target) .siblings() .removeClass("active");
  $(e.target) .toggleClass("active");
  $(e.target) .next() .slideToggle(5);
}
);
$ ("h2#directions") .click(e => {
  $(e.target) .siblings() .removeClass("active");
  $(e.target) .toggleClass("active");
  $(e.target) .next() .slideToggle(5);
}
);
$ ("h2#ingredients") .click(e => {
  $(e.target) .siblings() .next() .slideToggle(5);
});

$ ("dl#ingredients") .hide();
$ ("dl#directions") .hide();
$ ("dl#ingredients") .click(e => {
console.log($(e.target) .text());
});

$ ("img.slides") .first() .attr("src", "images/" + recipeName + ".png");
$ ("img.slides") .first() .attr("alt", recipeName);









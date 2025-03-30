/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Leah Thames
  Date: 3/26/25
  Filename: script.js

*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  const hero = {
    name: name,
    gender: gender,
    characterClass: characterClass,

  }
  return hero;
}

function displayCharacter(hero) {
  document.getElementById("generateHero").addEventListener("click", function(e) {
    e.preventDefault();

    // TODO: Get form values
    const heroName = document.getElementById("heroName").value;
    const gender = document.getElementById("heroGender").value;
    const characterClass = document.getElementById("heroClass").value;

    // TODO: Create character
    function Character(warrior, mage, rogue) {
      this.warrior = warrior;
      this.mage = mage;
      this.rogue = rogue;
    }
    const hero = createCharacter(heroName, gender, characterClass);
    console.log(hero);
    let heroClass = new Character("Warrior", "Mage", "Rogue");



    // TODO: Display character information
    document.getElementById("heroName").value = "";
    document.getElementById("heroGender").value = "";
    document.getElementById("heroClass").value = "";
  });
}


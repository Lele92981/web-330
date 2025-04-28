"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Leah Thames
      Date:   4/25/25

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
const postalCodeValue = postalCode.value;
const countryValue = postalCodeValue.substring().toUpperCase();

let placeValue = "";
let regionValue = "";

  // Use the fetch() method to retrieve the postal code data
  fetch(`https://api.zippopotam.us/country/code/${countryValue}/${postalCodeValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Postal code not found");
      }
      return response.json();
    })

    .then(response => response.json())
    .then(data => {
      // Extract the place and region values from the response
      placeValue = data.places[0]["place name"];
      regionValue = data.places[0]["state abbreviation"];
      place.innerHTML = placeValue;
      region.innerHTML = regionValue;
    })
    // Handle errors
    .catch(error => {
      place.innerHTML = "Postal code not found";
      region.innerHTML = "";
    });

    submitButton.onclick = function() {
      submitButton.innerHTML = "Submit";

      const postalCodeValue = postalCode.value;
      const countryValue = postalCodeValue.substring(0, 2).toUpperCase();

      let placeValue = "";
      let regionValue = "";

      // Use the fetch() method to retrieve the postal code data
      fetch(`https://api.zippopotam.us/country/code/${countryValue}/${postalCodeValue}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Postal code not found");
          }
          return response.json();
        })

        .then(response => response.json())
        .then(data => {
          // Extract the place and region values from the response
          placeValue = data.places[0]["place name"];
          regionValue = data.places[0]["state abbreviation"];
          place.innerHTML = placeValue;
          region.innerHTML = regionValue;
        })
        // Handle errors
        .catch(error => {
          place.innerHTML = "Postal code not found";
          region.innerHTML = "";
        });
    }

      // Check if the postal code is valid
      if (postalCodeValue.length === 5 && !isNaN(postalCodeValue)) {
        place.innerHTML = "Valid postal code";
        region.innerHTML = "";
      } else {
        place.innerHTML = "Invalid postal code";
        region.innerHTML = "";

        
      } // Display an error message if the postal code is invalid
      errorMessage.innerHTML = "Please enter a valid 5-digit postal code.";
    }; // Closing brace for form.onclick
  ; // Closing brace for postalCode.onblur


  // Error message to console log
  console.log("Postal code not found");
  // Error message to alert user
  alert("Postal code not found");
  // Error message to display on the page
  errorMessage.innerHTML = "Postal code not found";







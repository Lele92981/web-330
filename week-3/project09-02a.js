"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Leah Thames
      Date:   4/5/25

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");


/* onclick event handler for the submit button */
document.getElementById("submit").onclick = function() {
  const showData = document.getElementById("showData");
  showData.style.display = "block";


  // Display field values
  showData.innerHTML = `<h2>Rider Information</h2>
    <p><strong>Name:</strong> ${riderName.value}</p>
    <p><strong>Age Group:</strong> ${ageGroup.value}</p>
    <p><strong>Bike Option:</strong> ${bikeOption.value}</p>
    <p><strong>Route Option:</strong> ${routeOption.value}</p>
    <p><strong>Region:</strong> ${region.value}</p>
    <p><strong>Miles:</strong> ${miles.value}</p>
    <p><strong>Comments:</strong> ${comments.value}</p>`;
  showData.style.display = "block";
}



sessionStorage.setItem("riderName", riderName);
sessionStorage.setItem("ageGroup", ageGroup);
sessionStorage.setItem("bikeOption", bikeOption);
sessionStorage.setItem("routeOption", routeOption);
sessionStorage.setItem("region", region);
sessionStorage.setItem("miles", miles);
sessionStorage.setItem("comments", comments);


// Redirect to project09-02a.html
window.location.href = 'project09-02a.html';









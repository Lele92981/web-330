/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Leah Thames
  Date: 5/2/25
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  { name: "Gordon Ramsay",
    specialty: "French Cuisine",
    weakness: "Desserts",
    location: "London" },

  { name: "Wolfgang Puck",
    specialty: "Fusion Cuisine",
    weakness: "Baking",
    location: "Los Angeles" },

  { name: "Bobby Flay",
    specialty: "American Cuisine",
    weakness: "Pastries",
    location: "New York" },
];


getChefs()
            .then(chefArray => {
                const chef1Div = document.getElementById('chef1');
                const chef2Div = document.getElementById('chef2');
                const chef3Div = document.getElementById('chef3');


                chefArray.forEach((chef, index) => {
                    const chefDiv = document.getElementById(`chef${index+1}`);
                    if (chefDiv) {
                        chefDiv.innerHTML = `
                            <div class="chef-info">
                                <p><strong>Name:</strong> ${chef.name}</p>
                                <p><strong>Specialty:</strong> ${chef.specialty}</p>
                                <p><strong>Weakness:</strong> ${chef.weakness}</p>
                                <p><strong>Location:</strong> ${chef.location}</p>
                            </div>
                        `;
                    }
                });
            })

            .catch(error => {
              const errorContainer = document.getElementById('error-container');
              errorContainer.textContent = `Error: ${error.message}`;
          });


// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  let chef1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[0]);
    }, 2000); // Simulate a delay of 2 seconds
  });

  function getChef1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chefs.length === 0) {
          const error = new Error('No chefs found');
          console.error(error);
          reject(error);
        } else {
          resolve(chefs[0]);
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
}


// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  let chef2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 2000); // Simulate a delay of 2 seconds
  });

  function getChef2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chefs.length === 0) {
          const error = new Error('No chefs found');
          console.error(error);
          reject(error);
        } else {
          resolve(chefs[1]);
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }

}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  let chef3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }
    , 2000); // Simulate a delay of 2 seconds
  }
  );

  function getChef3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chefs.length === 0) {
          const error = new Error('No chefs found');
          console.error(error);
          reject(error);
        } else {
          resolve(chefs[2]);
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
}


function getChefs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chefs.length === 0) {
        const error = new Error('No chefs found');
        console.error(error);
        reject(error);
      } else {
        resolve(chefs);
      }
    }, 2000);
  });
}



// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([getChef1(), getChef2(), getChef3()])
  .then(results => {
    results.forEach((result, index) => {
      const chefDiv = document.getElementById(`chef${index + 1}`);
      if (result.status === 'fulfilled') {
        const chef = result.value;
        chefDiv.innerHTML = `
          <div class="chef-info">
            <p><strong>Name:</strong> ${chef.name}</p>
            <p><strong>Specialty:</strong> ${chef.specialty}</p>
            <p><strong>Weakness:</strong> ${chef.weakness}</p>
            <p><strong>Location:</strong> ${chef.location}</p>
          </div>
        `;
      } else {
        chefDiv.innerHTML = `<p>Error: ${result.reason.message}</p>`;
      }
    });
  })
  .catch(error => {
    console.error('Error retrieving chefs:', error);
  });

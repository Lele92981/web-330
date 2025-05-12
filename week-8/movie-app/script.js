/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Leah Thames
  Date: 5/12/25
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Sci-Fi",
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime",
  }
];

function fetchMovie(title) {
  // Implement this function
return new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const movie = movies.find((movie) => movie.title === title);
    if (movie) {
      resolve(movie);
    } else {
      reject(new Error("Movie not found"));
    }
  }, 1000);
});
}


// Call the fetchMovie function when the form is submitted
async function displayMovie
(title) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results
  try {
    const movie = await fetchMovie(title);
    resultDiv.innerHTML = `
      <h2>${movie.title} (${movie.year})</h2>
      <p>Director: ${movie.director}</p>
      <p>Genre: ${movie.genre}</p>
      <p>sypnosis: Movie titles</p>`;
  } catch (error) {
    resultDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

  const title = document.getElementById("movie-title").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results


document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission
  const title = document.getElementById("movie-title").value;
  displayMovie(title); // Call the displayMovie function
});


// Call the performTask function when the form is submitted
function performTask() {
  const title = document.getElementById("movie-title").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results
  fetchMovie(title)
    .then((movie) => {
      resultDiv.innerHTML = `
        <h2>${movie.title} (${movie.year})</h2>
        <p>Director: ${movie.director}</p>
        <p>Genre: ${movie.genre}</p>
        <p>sypnosis: Movie titles</p>`;
    })
    .catch((error) => {
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    });
}

let movieTitle = new Promise((resolve, reject) => {
  const title = document.getElementById("movie-title").value;
  if (title) {
    resolve(title);
  } else {
    reject(new Error("Movie title is required"));
  }
});

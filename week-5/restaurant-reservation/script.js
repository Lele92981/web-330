/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Leah Thames
  Date: 4/16/25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
const tables = [
  { tableNumber: 1, isReserved: false, capacity: 4 },
  { tableNumber: 2, isReserved: true, capacity: 2 },
  { tableNumber: 3, isReserved: false, capacity: 6 }
];

// Create a function reserveTable
// Remove this duplicate reserveTable function
function updateMessage(message, isSuccess) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;

    // Clear previous classes
    messageDiv.classList.remove('success', 'error');

    // Add appropriate class based on success/error status
    if (isSuccess) {
        messageDiv.classList.add('success');
    } else {
        messageDiv.classList.add('error');
    }
}

function reserveTable(tableNumber, onSuccess, onError, time) {
    const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

    if (!table) {
        console.log(`Table ${tableNumber} does not exist.`);
        onError(`Table ${tableNumber} does not exist.`);
        return;
    }

    if (table.isReserved) {
        console.log(`Table ${tableNumber} is already reserved.`);
        onError(`Table ${tableNumber} is already reserved.`);
        return;
    }

    // Table exists and is available
    updateMessage(`Reserving table ${tableNumber}...`, false);
    console.log(`Reserving table ${tableNumber}...`);

    setTimeout(() => {
        table.isReserved = true;
        onSuccess(tableNumber);
    }, time);
}

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const tableNumber = document.getElementById('tableNumber').value;

    updateMessage(`Attempting to reserve table ${tableNumber} for ${name}...`, false);
    // Simulate a reservation attempt with callbacks for success and error
    reserveTable(
        tableNumber,
        // Success callback
        function(reservedTableNumber) {
            updateMessage(`Table ${reservedTableNumber} successfully reserved for ${name}!`, true);
        },
        // Error callback
        function(errorMessage) {
            updateMessage(errorMessage, false);
        },
        2000 // Reserve after 2 seconds
    );
});// Ensure proper closure of the event listener function

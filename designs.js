// Set color variable
var color = "#000";
// Select color input
var colorPicker = document.getElementById("colorPicker");
// Add color input event listener
colorPicker.addEventListener("input", function () {
    color = this.value;
});

// Select size input
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");
// Select form
var form = document.getElementById("sizePicker");
// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
});

// Select table
var table = document.getElementById("pixelCanvas");

function makeGrid() {
    // Get height
    var h = inputHeight.value;
    // Get width
    var w = inputWidth.value;
    // Create table body
    var tbody = document.createElement("tbody");
    // Loop for height
    for (var i = 0; i < h; i++) {
        // Create table row
        var row = document.createElement("tr");
        // Loop for width
        for (var j = 0; j < w; j++) {
            // Create table cell
            var cell = document.createElement("td");
            // Add click event listener
            cell.addEventListener("click", function () {
                this.style.backgroundColor = color;
            });
            // Append the table cell to the row
            row.appendChild(cell);
        }
        // Append the row to the table body
        tbody.appendChild(row);
    }
    // Clear table
    table.innerHTML = '';
    // Append the table body
    table.appendChild(tbody);
}

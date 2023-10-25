// Data as an array of objects
var data = [
    { district: "Houston Independent School District (HISD)", students: "209,772" },
    { district: "Dallas Independent School District (DISD)", students: "152,991" },
    // Add more data as needed
];

// Get a reference to the table
var table = document.getElementById("districtTable");

// Loop through the data and populate the table
for (var i = 0; i < data.length; i++) {
    var row = table.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = data[i].district;
    cell2.innerHTML = data[i].students;
}

// Attach the data to a container with the id "dataContainer"
var dataContainer = document.getElementById("dataContainer");
dataContainer.innerHTML = JSON.stringify(data, null, 2); // Display the data as a JSON string

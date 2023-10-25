// Data as an array of objects
var data = [
    { district: "Houston Independent School District (HISD)", students: "209,772" },
    { district: "Dallas Independent School District (DISD)", students: "152,991" },
    { district: "Cypress-Fairbanks Independent School District (CFISD)", students: "116,000" },
    { district: "Northside Independent School District (NISD)", students: "105,000" },
    { district: "Fort Worth Independent School District (FWISD)", students: "78,000" },
    { district: "Austin Independent School District (AISD)", students: "75,000" },
    { district: "San Antonio Independent School District (SAISD)", students: "47,000" },
    { district: "Katy Independent School District (KISD)", students: "84,000" },
    { district: "Plano Independent School District (PISD)", students: "53,000" },
    { district: "North East Independent School District (NEISD)", students: "65,000" },

    // Add more data as needed
];

// Sort the data by the number of students in descending order
data.sort(function(a, b) {
    return parseInt(b.students.replace(',', '')) - parseInt(a.students.replace(',', ''));
});


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
// var dataContainer = document.getElementById("dataContainer");
// dataContainer.innerHTML = JSON.stringify(data, null, 2); // Display the data as a JSON string

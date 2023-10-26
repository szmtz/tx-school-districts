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
];

// Sort the data by the number of students in descending order
function sortByLargest() {
    data.sort(function(a, b) {
        return parseInt(b.students.replace(',', '')) - parseInt(a.students.replace(',', ''));
    });
    displayData();
}

// Sort the data by the number of students in ascending order
function sortBySmallest() {
    data.sort(function(a, b) {
        return parseInt(a.students.replace(',', '')) - parseInt(b.students.replace(',', ''));
    });
    displayData();
}

// Display data in the table and the container
function displayData() {
    var table = document.getElementById("districtTable");
    table.innerHTML = "<tr><th>School District</th><th>Number of Students</th></tr>";

    data.forEach(function(item) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = item.district;
        cell2.innerHTML = item.students;
    });

    // var dataContainer = document.getElementById("dataContainer");
    // dataContainer.innerHTML = JSON.stringify(data, null, 2);
}

// Attach click event listeners to the sorting buttons
document.getElementById("sortLargestBtn").addEventListener("click", sortByLargest);
document.getElementById("sortSmallestBtn").addEventListener("click", sortBySmallest);

// Display the initial data
displayData();


// Function to handle sorting and add animation
function sortAndAnimateData(sortFunction) {
    // Remove existing rows
    var table = document.getElementById("districtTable");
    table.innerHTML = "<tr><th>School District</th><th>Number of Students</th></tr>";

    // Sort the data
    sortFunction();

    // Add sorted data with animation
    var delay = 100; // Delay between rows (adjust as needed)
    data.forEach(function(item, index) {
        setTimeout(function() {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = item.district;
            cell2.innerHTML = item.students;
        }, index * delay);
    });
}

// Attach click event listeners to the sorting buttons
document.getElementById("sortLargestBtn").addEventListener("click", function() {
    sortAndAnimateData(sortByLargest);
});

document.getElementById("sortSmallestBtn").addEventListener("click", function() {
    sortAndAnimateData(sortBySmallest);
});

// Display the initial data
displayData();

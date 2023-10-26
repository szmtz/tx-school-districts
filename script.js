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

// Function to sort and animate the data
function sortAndAnimateData(sortFunction) {
    var table = d3.select("#districtTable");
    var t = d3.transition().duration(1000);

    // Remove existing rows with animation
    table.selectAll("tr")
        .data(data, function(d) { return d.district; })
        .exit()
        .style("opacity", 1)
        .transition(t)
        .style("opacity", 0)
        .remove();

    // Sort the data
    sortFunction();

    // Add sorted data with animation
    table.selectAll("tr")
        .data(data, function(d) { return d.district; })
        .enter()
        .append("tr")
        .style("opacity", 0)
        .transition(t)
        .style("opacity", 1);

    // Update the table cells
    table.selectAll("tr")
        .data(data, function(d) { return d.district; })
        .selectAll("td")
        .data(function(d) {
            return [d.district, d.students];
        })
        .text(function(d) { return d; });
}

// Attach click event listeners to the sorting buttons
document.getElementById("sortLargestBtn").addEventListener("click", function() {
    sortAndAnimateData(sortByLargest);
});

document.getElementById("sortSmallestBtn").addEventListener("click", function() {
    sortAndAnimateData(sortBySmallest);
});

// Display the initial data
var table = d3.select("#districtTable");

// Add table headers
table.append("tr")
    .selectAll("th")
    .data(["School District", "Number of Students"])
    .enter()
    .append("th")
    .text(function(d) { return d; });

// Add initial data without animation
table.selectAll("tr")
    .data(data, function(d) { return d.district; })
    .enter()
    .append("tr")
    .selectAll("td")
    .data(function(d) {
        return [d.district, d.students];
    })
    .enter()
    .append("td")
    .text(function(d) { return d; });

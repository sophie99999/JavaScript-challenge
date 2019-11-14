// from data.js
var tableData = data;

// Append the a table to web page from data.js file
var tbody = d3.select("tbody")

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) => {
        var cell =row.append("td");
        cell.text(value);
    });
});

// Here is the JS code that will listen for events and search through
// the date column to fine rows that match user input
var button=d3.select("#filter-btn");
console.log(button);

// Using .on() to add event handler function to the target.
// Line 21 to 53 is event handlier inline function.
button.on("click",function() {
    console.log(d3.event.target);
    
    //To clear out the exisiting HTML code under <tbody> tag. We are adding new table for the filtered data.
    var list=d3.select("tbody");
    list.html("");
    // prevent the page from refreshing (default behavior for Form)
    d3.event.preventDefault();
    
    // To get the input data
    var inputElement= d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);


    // Filter to match the input data
    function filterUFO(targeted) {
        return targeted.datetime === inputValue;
    }
    var filteredData = tableData.filter(filterUFO);
    
    // Alternatively, can also use inline function for filter as below:
    // var filteredData = tableData.filter(targeted =>targeted.datetime === inputValue);
    
    console.log(filteredData);

    filteredData.forEach((ufo) =>{
        var row=tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});



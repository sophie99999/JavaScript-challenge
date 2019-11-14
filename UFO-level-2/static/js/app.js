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
    var inputElement_date= d3.select("#datetime");
    var inputValue_date = inputElement_date.property("value");
    console.log(inputValue_date);

    var inputElement_city= d3.select("#city");
    var inputValue_city = inputElement_city.property("value");
    console.log(inputValue_city);

    var inputElement_state= d3.select("#state");
    var inputValue_state = inputElement_state.property("value");
    console.log(inputValue_state);

    var inputElement_country= d3.select("#country");
    var inputValue_country = inputElement_country.property("value");
    console.log(inputValue_country);

    var inputElement_shape= d3.select("#shape");
    var inputValue_shape = inputElement_shape.property("value");
    console.log(inputValue_shape);

    
  
    // This step is very very important!! Unlike in the first challange, here we have to assign the data table to a variable locally inside this function.
    // Previously at top, we assigned the data table to a variable globally.

    var filteredData=data

    if (inputValue_date != "") {
        var filteredData = filteredData.filter(targeted =>targeted.datetime === inputValue_date);
    };

    if (inputValue_city != "") {
        var filteredData = filteredData.filter(targeted =>targeted.city === inputValue_city);
    };

    if (inputValue_state != "") {
        var filteredData = filteredData.filter(targeted =>targeted.state === inputValue_state);
    };

    if (inputValue_country != "") {
        var filteredData = filteredData.filter(targeted =>targeted.country === inputValue_country);
    };

    if (inputValue_shape != "") {
        var filteredData = filteredData.filter(targeted =>targeted.shape === inputValue_shape);
    };

    

    console.log(filteredData);

    filteredData.forEach((ufo) =>{
        var row=tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});



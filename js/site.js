//Get values from the user. We need to get the fizz and the buzz value.
function getValues(){
    //Get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //Parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //Check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //We call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //Call display data
        displayData(fbArray);
    } else {
        alert("You must enter a integer");
    }
}

function fizzBuzz(fizzValue, buzzValue){
    //Initialize return array
    let returnArray = [];
    //Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0){
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//Loop over the array and create a <tr> for each item
function displayData(fbArray){
    //Get the <tb> from the page
    let tableBody = document.getElementById("results");
    //Get the template row
    let templateRow = document.getElementById("fbTemplate");
    //Clear table first
    tableBody.innerHTML = "";
    
    for (let i = 0; i < fbArray.length; i+= 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //Grab just the td's and put them in an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];

        tableBody.appendChild(tableRow);
    }
}
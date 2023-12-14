function handleModes() {
    let body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}
// function for form validations 
function handleTextInput() {
    let errorMessage = "";
    let name = document.getElementById("yourname");
    let college = document.getElementById("collegename");
    let branch = document.getElementById("branch");
    let yesCheckbox = document.getElementById("yes");
    let noCheckbox = document.getElementById("no");
    
    if (name.value === "") {
        errorMessage += "Please enter yourname, ";
    }

    if (college.value === "") {
        errorMessage += "Please enter college name, ";
    }

    if (branch.value === "Select") {
        errorMessage += "Please select branch, ";
    }

    if (yesCheckbox.checked === false && noCheckbox.checked === false) {
        errorMessage += "Please select a graduation option. ";
    }
    // printing error message if contain
    if (errorMessage !== "") {
        document.getElementById("Final_div").innerHTML = "<h4>" + errorMessage + "</h4>";
        document.getElementById("Final_div").style.color = "red";
    } 
    // printing the Final message if there is no error
    else {
        let FinalMessage = "Hi " + name.value + ", Hope you are doing well. Glad to know that you ";
        FinalMessage += (yesCheckbox.checked) ? "have completed your graduation in " : "are doing your graduation in ";
        FinalMessage += branch.value + " from " + college.value + ".";
        document.getElementById("Final_div").innerHTML = "<h4>" + FinalMessage + "</h4>";
        document.getElementById("Final_div").style.color = "black";
    }
}
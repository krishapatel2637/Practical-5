function validateform() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value
    let course = document.getElementById("course").value;
    let year = document.getElementById("year").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let terms = document.getElementById("terms").checked;

    let errormessage = ""

    if (name === "") {
        errormessage += "Name is required \n"
    }
    if (mobile === "") {
        errormessage += "Mobile is required \n"
    }
    if (email === "") {
        errormessage += "Email is required \n"
    }
    if (password === "") {
        errormessage += "Password is required \n"
    }
    if (confirm === "") {
        errormessage += "Confirm your password. \n"
    }
    if (course === "Select Course") {
        errormessage += "Course is required \n"
    }
    if (year === "Select Year") {
        errormessage += "Year is required \n"
    }
    if (!male && !female) {
        errormessage += "Gender is required \n";
    }
    if (!terms) {
        errormessage += "Please accept Terms and Conditions\n";
    }
    if (errormessage !== "") {
        alert(errormessage);
        return false;
    }
    alert("Form submitted successfully!");
}
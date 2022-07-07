const errorBorder = "1px solid red";
const successBorder = "2px solid green";

let fnameNode = document.getElementById('fname');
let lnameNode = document.getElementById('lname');
let phoneNode = document.getElementById('phone')
let officeNode = document.getElementById('office')
let emailNode = document.getElementById('emailid');
let passNode = document.getElementById('pass');
let cpassNode = document.getElementById('c_pass');

let errorNode1 = document.getElementById('error1');
let errorNode2 = document.getElementById('error2');
let errorNode3 = document.getElementById('error3');
let errorNode4 = document.getElementById('error4');
let errorNode5 = document.getElementById('error5');
let errorNode6 = document.getElementById('error6');
let errorNode7 = document.getElementById('error7');

function validateForm() {
    let s1 = validate1();
    let s2 = validate2();
    let s3 = validate3();
    let s4 = validate4();
    let s5 = validate5();
    let s6 = validate6();
    let s7 = validate7();
    let s8 = radioValidation();
    let s9 = checkbox();
    let s10 = about();
    let s11 = birthDate();

    let s12 = ageCalculate()
    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11 && s12);
}


function validate1() {
    let fname = fnameNode.value;
    condition = new RegExp("^[a-zA-Z]*$");
    errorNode1.innerHTML = "";
    if (fname === '') {
        errorNode1.innerHTML = " First name is compulsory";
        fnameNode.style.border = errorBorder;
        return false;
    }
    else if (condition.test(fname) == false) {
        errorNode1.innerHTML = "Only alphabets are allowed";
        fnameNode.style.border = errorBorder;
        return false;
    }
    else {
        fnameNode.style.border = successBorder;
        return true;
    }
};


function validate2() {
    let lname = lnameNode.value;
    condition = new RegExp("^[a-zA-Z]*$");
    errorNode2.innerHTML = "";
    if (lname === '') {
        errorNode2.innerHTML = "Last name is  Compulsory ";
        lnameNode.style.border = errorBorder;
        return false;
    }
    else if (condition.test(lname) == false) {
        errorNode2.innerHTML = "Only alphabets are allowed";
        lnameNode.style.border = errorBorder;
        return false;
    }
    else {
        lnameNode.style.border = successBorder;
        return true;
    }
};


function validate3() {
    let phone = phoneNode.value;
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode3.innerHTML = "";

    if (phone === '') {
        errorNode3.innerHTML = "Mobile is required";
        phoneNode.style.border = errorBorder;
        return false;
    }
    else if (regExp.test(phone) == false) {
        errorNode3.innerHTML = "Please enter valid mobile number";
        phoneNode.style.border = errorBorder;
        return false;
    }
    else {
        phoneNode.style.border = successBorder;
        return true;
    }
};



function validate4() {
    let office = officeNode.value;
    let regExp = new RegExp("^[0-9]{11}$");
    errorNode4.innerHTML = "";

    if (office === '') {
        errorNode4.innerHTML = "Office No is required";
        officeNode.style.border = errorBorder;
        return false;
    }
    else if (regExp.test(office) == false) {
        errorNode4.innerHTML = "Please enter valid  number";
        officeNode.style.border = errorBorder;
        return false;
    }
    else {
        officeNode.style.border = successBorder;
        return true;
    }
};

function validate5() {
    let email = emailNode.value;
    errorNode5.innerHTML = "";
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let ss1 = email.substring(0, email.indexOf('@'));
    let ss2 = email.substring(email.indexOf('@') + 1);

    console.log(ss1);
    console.log(ss2);
    if (email === '') {
        errorNode5.innerHTML = "Email Id is required";
        emailNode.style.border = errorBorder;
        return false;
    }
    else if (emailPattern.test(email)==false) {
        errorNode5.innerHTML = "Please provide proper emial";
        emailNode.style.border = errorBorder;
        return false;
    }
    
    else {
        emailNode.style.border = successBorder;
        return true;
    }
}

function validate6() {
    let password = passNode.value;
    let regExp = new RegExp("^[a-zA-Z0-9]{6,12}$");
    errorNode6.innerHTML = "";

    if (password === '') {
        errorNode6.innerHTML = "Password is required";
        passNode.style.border = errorBorder;
        return false;
    }
    else if (regExp.test(password) == false) {
        errorNode6.innerHTML = "Password should be between 8 to 12 charachers,  accepts only Alphanumeric characters, No Special characters";
        passNode.style.border = errorBorder;
        return false;
    }
    else {
        passNode.style.border = successBorder;
        return true;
    }
}

function validate7() {
    let password = passNode.value;
    let c_password = cpassNode.value;
    errorNode7.innerHTML = "";
    if (c_password === '') {
        errorNode7.innerHTML = "Confirm Password is required";
        cpassNode.style.border = errorBorder;
        return false;
    }
    else if (c_password != password) {
        errorNode7.innerHTML = "Password is not matching.";
        cpassNode.style.border = errorBorder;
        return false;
    }
    else {
        cpassNode.style.border = successBorder;
        return true;
    }
}

let errorNode10 = document.getElementById('error10');
function radioValidation() {


    if (document.getElementById("male").checked === false && document.getElementById('female').checked === false) {

        errorNode10.innerHTML = "Please select a gender";
        return false


    }
    else {
        errorNode10.innerHTML = "";
        return true;
    }

};
let errorNode11 = document.getElementById('error11');
function checkbox() {
    let ch1 = document.getElementById('checkbox_1').checked;
    let ch2 = document.getElementById('checkbox_2').checked;
    let ch3 = document.getElementById('checkbox_3').checked;

    if (ch1 === false && ch2 === false && ch3 === false) {
        errorNode11.innerHTML = "Please select at leat one check box";
        return false;
    }



}

let errorNode12 = document.getElementById('error12');;
function about() {

    aboutNode = document.getElementById('about').value;

    if (aboutNode === '') {

        errorNode12.innerHTML = "Please write something about you";
        return false;
    }
    else if (aboutNode !== '') {
        errorNode12.innerHTML = "";

    }

    else {
        aboutNode.style.border = successBorder;
        return true;
    }


}


function checkRadio() {
    let errorNode10 = document.getElementById('error10');
    if (document.getElementById('male').checked === true || document.getElementById('female').checked === true) {
        errorNode10.innerHTML = '';

    }
};

function check() {
    let errorNode11 = document.getElementById('error11');
    if (document.getElementById('checkbox_1').checked === true || document.getElementById('checkbox_2').checked === true || document.getElementById('checkbox_3').checked === true) {
        errorNode11.innerHTML = '';
    }

};



// DOB Validation
let errorNode8 = document.getElementById('error8');
function birthDate() {
    let dayNode = document.getElementById('day').value;
    let monthNode = document.getElementById('month').value;
    let yearNode = document.getElementById('year').value;
    if (dayNode === "day" || monthNode == "month" || yearNode == "year") {
        errorNode8.innerHTML = "Enter a valid date of birth"

    }




}

function checkDOB() {
    let dayNode = document.getElementById('day').value;
    let monthNode = document.getElementById('month').value;
    let yearNode = document.getElementById('year').value;
    if (yearNode !== "year" && monthNode !== "month" && dayNode !== "day") {
        errorNode8.innerHTML = '';

    }

}






// Add years to birth date

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

for (yr = 1900; yr < year + 1; yr++) {
    console.log(yr)
    var option = document.createElement("option");
    option.text = yr;

    var select = document.getElementById("year");
    select.appendChild(option);
}






function ageCalculate() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    document.getElementById("29").style.display = "block";
    document.getElementById("30").style.display = "block";
    document.getElementById("31").style.display = "block";

   
    if (month == "april" || month == "june" || month == "sept" || month == "nov") {
        document.getElementById("31").style.display = "none";
    };
    

    if (month == "feb" && (year % 4 == 0)) {
        document.getElementById("30").style.display = "none";
        document.getElementById("31").style.display = "none";
    } else if (month == "feb" && (year % 4 != 0)) {
        document.getElementById("29").style.display = "none";
        document.getElementById("30").style.display = "none";
        document.getElementById("31").style.display = "none";
    };


    if (day != "day" && month != "month" && year != "year") {
        var stringDate = month + "/" + day + "/" + year
        var timestamp = Date.parse(stringDate);
        var dateObject = new Date(timestamp);
        var currentYear = new Date().getFullYear();
        var birthYear = dateObject.getFullYear();
        var age = currentYear - birthYear;
        age = age + " years";
        document.getElementById("age").value = age;
        return true;

    }
    
}









































// const submitButton = document.querySelector("#submit");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const pass = document.querySelector("#pass");
// const cpass = document.querySelector("#cpass");
// const myform = document.querySelector("form")

// function setError(msg, id) {
//     let parentBox = id.parentNode;
//     let small = parentBox.querySelector('small');
//     small.innerText = msg;
// }

// function clearError(){
//     const formerrors=document.getElementsByClassName("error");
//     for(let i of formerrors)
//     {
//         i.innerText=""
//     }
// }

// // function saveFormData(formDataEntry) {
// //     let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
// //     // retrieves the existing form data array from localStorage or initializes an empty array if there is none.

// //     formDataArray.push(formDataEntry);
// //     localStorage.setItem('formData', JSON.stringify(formDataArray));
// // }

// function saveFormData(formDataEntry) {
//     let formDataArray = JSON.parse(localStorage.getItem('formData'));
//     if (!Array.isArray(formDataArray)) {        
//         //check if the retrieved data is an array. If it's not,we initialize formDataArray as an empty array.           
//         formDataArray = [];
//     }
//     formDataArray.push(formDataEntry);//push the new form data entry into the formDataArray.
//     localStorage.setItem('formData', JSON.stringify(formDataArray));
// }


// function validateForm() {
//     /*onsubmit="return validateForm()-: When the form is submitted by clicking a submit button
//     1) If validateForm() returns true, the form submission proceeds as normal.
//     2) If validateForm() returns false, the form submission is halted, and the form data is not sent  to the server.*/
//     let nameVal = name.value;
//     let emailVal = email.value;
//     let phoneVal=phone.value;
//     let passVal=pass.value;
//     let cpassVal=cpass.value;

//     let returnVal=true;        //set initially returnVal=true
    

//     clearError(); //it checks error and remove it when click on submit button


//     if (nameVal.length < 5) {
//         setError("* User name is too short!", name);
//         returnVal= false; 
//     }
    

//     let emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!emailPattern.test(emailVal)) {
//         setError("* Invalid email!", email);
//         returnVal= false;
//     }
    

//     if (phoneVal.length!=10) {
//         setError("* phone number should be 10 digit!", phone);
//         returnVal= false; 
//     }
    

//     if (passVal.length<6) {
//         setError("* password should be greater than 6 digit!", pass);
//         returnVal= false; 
//     }
    

//     if (cpassVal!=passVal) {
//         setError("* password doesnot match!", cpass);
//         returnVal= false; 
//     }
    
    

//     if (returnVal==true) {
//         const formData = {
//             name: nameVal,
//             email: emailVal,
//             phone: phoneVal,
//             password: passVal,
//             cpass: cpassVal
//         };
//         saveFormData(formData);
//         window.location.href = 'form.html';
//     }
//     return returnVal;  // return true if all validation is perform and submit form .
    
    
// }



const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pass = document.querySelector("#pass");
const cpass = document.querySelector("#cpass");
const myform = document.querySelector("form")

function setError(msg, id) {
    let parentBox = id.parentNode;
    let small = parentBox.querySelector('small');
    small.innerText = msg;
}

function clearError(){
    const formerrors=document.getElementsByClassName("error");
    for(let i of formerrors)
    {
        i.innerText=""
    }
}

// function saveFormData(formDataEntry) {
//     let formDataArray = JSON.parse(localStorage.getItem('formData')) || [];
//     // retrieves the existing form data array from localStorage or initializes an empty array if there is none.

//     formDataArray.push(formDataEntry);
//     localStorage.setItem('formData', JSON.stringify(formDataArray));
// }

function saveFormData(formDataEntry) {
    let formDataArray = JSON.parse(localStorage.getItem('formData'));
    if (!Array.isArray(formDataArray)) {        
        //check if the retrieved data is an array. If it's not,we initialize formDataArray as an empty array.           
        formDataArray = [];
    }
    formDataArray.push(formDataEntry);//push the new form data entry into the formDataArray.
    localStorage.setItem('formData', JSON.stringify(formDataArray)); 
    // converting formDataArray to string and store into localstorage.
}


function validateForm() {
    /*onsubmit="return validateForm()-: When the form is submitted by clicking a submit button
    1) If validateForm() returns true, the form submission proceeds as normal.
    2) If validateForm() returns false, the form submission is halted, and the form data is not sent  to the server.*/
    let nameVal = name.value;
    let emailVal = email.value;
    let phoneVal=phone.value;
    let passVal=pass.value;
    let cpassVal=cpass.value;

    let returnVal=true;        //set initially returnVal=true
    

    clearError(); //it checks error and remove it when click on submit button


    if (nameVal.length < 5) {
        setError("* User name is too short!", name);
        returnVal= false; 
    }
    

    let emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailPattern.test(emailVal)) {
        setError("* Invalid email!", email);
        returnVal= false;
    }
    

    if (phoneVal.length!=10) {
        setError("* phone number should be 10 digit!", phone);
        returnVal= false; 
    }
    

    if (passVal.length<6) {
        setError("* password should be greater than 6 digit!", pass);
        returnVal= false; 
    }
    

    if (cpassVal!=passVal) {
        setError("* password doesnot match!", cpass);
        returnVal= false; 
    }
    
    

    if (returnVal==true) {
        const formData = {
            name: nameVal,
            email: emailVal,
            phone: phoneVal,
            password: passVal,
            cpass: cpassVal
        };
        saveFormData(formData);
        console.log('Redirecting to form.html');
        window.location.href ="form.html";
    }
    return returnVal;  // return true if all validation is perform and submit form .
    
}

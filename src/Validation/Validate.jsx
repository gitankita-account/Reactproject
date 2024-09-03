const firstNameRegex = /^[a-zA-Z]{3,20}$/;
const lastNameRegex = /^[a-zA-Z]{4,20}$/;
const emailRegex = /^[a-zA-Z-0-9.!@#$%&*()_+=`~]{3,}[@][a-zA-z]{3,}[.][a-zA-Z-0-9]$/;
const passwordRegex = /^(?=.*[A-z])(?=.*[0-9])(?=.*[.,`~!@#%&*()_+=])[a-zA-Z0-9.,!@#$%^&*()_+`~]{8,16}$/;


export function formValidate(inputid, value) {
    let error = {}
    // firstname validation-------------------------
    if (inputid === "firstname") {
        if (value === "") {
            error = {...error, [inputid] : `${inputid} is required`};
        } else if (firstNameRegex.test(value)) {
           error = {...error, [inputid] : `Please enter valid ${inputid}`};
        }else{
           error = {...error, [inputid] : ""};
        }
}
    // lastname validation-------------------------

if (inputid === "lastName") {
    if (value === "") {
        error = {...error, [inputid] : `${inputid} is required`};
    } else if (lastNameRegex.test(value)) {
        error = {...error, [inputid] : `Please enter valid ${inputid}`};
    }else{
        error = {...error, [inputid] : ""};
    }
}
    // email validation-------------------------
    if (inputid === "email") {
        if (value === "") {
            error = {...error, [inputid] : `${inputid} is required`};
        } else if (emailRegex.test(value)) {
            error = {...error, [inputid] : `Please enter valid ${inputid}`};
        }else{
            error = {...error, [inputid] : ""};
        }
    }
    // password validation-------------------------
    if (inputid === "password") {
        if (value === "") {
            error = {...error, [inputid] : `${inputid} is required`};
        } else if (passwordRegex.test(value)) {
            error = {...error, [inputid] : `Please enter valid ${inputid}`};
        }else{
            error = {...error, [inputid] : ""};
        }
    }
return error;
}


/* backend */

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQPFvqgTicSLWZz8QoyzoxEDo1kHkI0wHsq0Rz5nm27zUxv_xmSZB-kM_mrrEgsdQx/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
        swal("Good job!", "registration successful! ", "success");
    form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})













// const submit_button = document.querySelector('.button');
// submit_button.onclick =(e) => {
//     e.preventDefault();
//     // all input data recived this variables
//    const fname= document.getElementById('fname').value;
//    const lname= document.getElementById('lname').value;
//    const email= document.getElementById('email').value;
//    const pass= document.getElementById('pass').value;
//    const cpass= document.getElementById('cpass').value;
// //    now store this data in your web broswer store
// localStorage.setItem('FirstName', fname);
// localStorage.setItem('LastName', lname);
// localStorage.setItem('Email', email);
// localStorage.setItem('Password', pass);
// localStorage.setItem('Cpassword', cpass);
// // now write some condition
// if(fname=="" && lname == "" && email == "" && pass == "" && cpass =="" ){
//     // let change this alert system
//     swal("Opps...!", "input field must be fill", "error");
// }
// else{
//     if(pass !== cpass){
//         swal("Opps...!", "password not matching!", "error");
//     } else{
//         swal("Good job!", "registration successful! ", "success");
  
//     }
// }
// }



// const login = document.querySelector('.login');
// login.onclick = (e) => {
//     e.preventDefault();
//     // cautch the value which is type user login page 
//     const emailAddress=document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // lets get value in localStorage which is store user in registration form 
//     const Email= localStorage.getItem('Email');
//     const Password = localStorage.getItem('Password');

//     if(emailAddress == "" && password == ""){
//         swal("Opps...!", "input field has no value!", "error");
//     }else{
//         if(emailAddress == Email && password == Password){
//             swal("Good job!", "Login successful! ", "success");
//         }else{
//             swal("Opps...!", "incorrect password!", "error");
//         }
//     }
// }


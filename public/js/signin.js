// Custom alert
function create_alert(type, message) {
    var alertarea = document.getElementById('custom-alert');
    if (type == "success") {
        str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    } else if (type == "error") {
        str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
}

function initApp() {
    // Login with Email/Password
    var txtEmail = document.getElementById('inputEmail');
    var txtPassword = document.getElementById('inputPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnGoogle = document.getElementById('btngoogle');
    var btnSignUp = document.getElementById('btnSignUp');

    btnSignUp.addEventListener('click', function() {
        /// TODO 2: Add email signup button event
        ///         1. Get user input email and password to signup
        ///         2. Show success message by "create_alert()" and clean input field
        ///         3. Show error message by "create_alert()" and clean input field
        console.log("signup");
        firebase.auth().createUserWithEmailAndPassword(txtEmail.value, txtPassword.value)
        .then((userCredential)=>{
            create_alert("success", "Signup successfully!");
        }).catch((errorMSG)=>{
            create_alert("error", "Some problem occured!");
        });
        txtEmail.value = "";
        txtPassword.value = "";
    });

    btnLogin.addEventListener('click', function() {
        /// TODO 3: Add email login button event
        ///         1. Get user input email and password to login
        ///         2. Back to index.html when login success
        ///         3. Show error message by "create_alert()" and clean input field

        firebase.auth().signInWithEmailAndPassword(txtEmail.value, txtPassword.value)
        .then(()=>{
            window.location = "../index.html";
        }).catch(()=>{
            create_alert("error","Sign in failed!");
        });
    });

    btnGoogle.addEventListener('click', function() {
        /// TODO 4: Add google login button event
        ///         1. Use popup function to login google
        ///         2. Back to index.html when login success
        ///         3. Show error message by "create_alert()"
        var provider = new firebase.auth.GoogleAuthProvider;

        firebase.auth().signInWithPopup(provider)
        .then((result)=>{
            window.location = "../index.html";
        }).catch((error)=>{
            create_alert("error","Sign in failed!");
        });
    });


}

window.onload = function() {
    initApp();
};
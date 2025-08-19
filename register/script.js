// Register form logic
const registerForm = document.getElementById("registerform");
if (registerForm) {
    registerForm.addEventListener("submit" , function (e) {
        e.preventDefault();

        const username = document.getElementById("regusername").value.trim();
        const password = document.getElementById("regpassword").value.trim();

        if (!username || !password) {
            alert("Please fill in all fields.");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Registration successful! Please login.");
       window.location.href = "login-page.html";

    });
}



// login page
  

const loginform=document.getElementById("loginform");
if(loginform){
    loginform.addEventListener("submit", function(e){
    e.preventDefault();
    
    const enteredusername=document.getElementById("loginusername").value.trim();
    const enteredpassword=document.getElementById("loginpassword").value.trim();


    const savedusername=localStorage.getItem("username");
    const savedpassword=localStorage.getItem("password");

    if( enteredusername === savedusername && enteredpassword === savedpassword){
        alert("login successfully!");
        window.location.href="home-page.html";
    }else{
        alert("invalid user name or password.");

    }
    

});
}
function clicking(){
    window.location.href="login-page.html";
}
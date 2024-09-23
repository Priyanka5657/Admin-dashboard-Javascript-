document.getElementById("login").addEventListener("click", display);

function display(e) {
    e.preventDefault(); 

    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value.trim();
    

    let storedMobile = localStorage.getItem("mobile");
    let storedPassword = localStorage.getItem("password");
   

    if (mobile === storedMobile && password === storedPassword) {
        alert(`Login Succesfull`);
        
        localStorage.setItem("userMobile", storedMobile);
        window.location.href = "/index.html";
    } else {
        alert("Incorrect mobile number or password.");
    }
}

function clickHere() {
    window.location.href = '/sign-up/index.html';
}

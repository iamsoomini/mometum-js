const loginForm = document.getElementById("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("username", userName);
    console.log(userName);

    greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${username}`;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);

    
}

// function handleLinkClick(event){
//     //이벤트가 작동하지 않도록 막음.
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");

// }


loginForm.addEventListener("submit", onLoginSubmit);


const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
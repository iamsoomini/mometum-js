const loginForm = document.getElementById("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    console.log(userName);

    greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${username}`;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    // if(userName === ""){
    //     alert("please write your name.");
    // }else if(userName.length > 15){
    //     alert("your name is too long.")
    // }
    
}

// function handleLinkClick(event){
//     //이벤트가 작동하지 않도록 막음.
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");

// }

loginForm.addEventListener("submit", onLoginSubmit);
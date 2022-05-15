// localStorage.setItem("member", JSON.stringify(false));
// localStorage.setItem("user", JSON.stringify(null));
// localStorage.setItem("users", JSON.stringify([]));
function cleanAll() {
    var all = document.getElementsByClassName("all");
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
}

const onPressLogIn = ()=>{
    if((!JSON.parse(localStorage.getItem("user"))) && (!JSON.parse(localStorage.getItem("users").length - 2)) ){
        localStorage.setItem("member", JSON.stringify(false));
        alert("you have to sign up");
        cleanAll();
    }
}

const simon = ()=>{
    if (localStorage.getItem("member") == "true") {
        window.open("./game.html", "_self");
    }
    else
    alert("log in!");
}
const none = ()=>{
    if (localStorage.getItem("member") == "true") {
        window.open("./none.html", "_self");
    }
    else
    alert("log in!");
}

const handleSubmitLogIn = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = JSON.parse(localStorage.getItem("user"));
    const uname = document.querySelector("#logIn input[name=uname]").value;
    const Password = document.querySelector("#logIn input[name=Password]").value;
    if (JSON.parse(localStorage.getItem("remember")) == "false") {
        if (user[0].uname === uname && user[0].Password === Password) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("member", JSON.stringify(true));
            alert("you can play till you close the browser");
            return;
        }
    }
    if (JSON.parse(localStorage.getItem("remember")) == "true") {
        for (let index = 0;index < users.length; ++index) {
            if (users[index].uname === uname && users[index].Password === Password) {
                localStorage.setItem("user", JSON.stringify(users[index]));
                localStorage.setItem("member", JSON.stringify(true));
                alert("choose your game");
                return;
            }
        }
    }
    alert("wrong user name or password");
    localStorage.setItem("member", JSON.stringify(false));
}

const handleSubmitSignUp = () => {
    
    const Email = document.querySelector("#signUp input[name=Email]").value;
    const uname = document.querySelector("#signUp input[name=uname]").value;
    const Password = document.querySelector("#signUp input[name=Password]").value;
    const remember = document.querySelector("#signUp input[name=remember]").checked;
    const tempUser = {
        "Email": Email,
        "uname": uname,
        "Password": Password,
        "randColor": [],
        "scores": 0,
        "errors": 0
    }
    if (remember==true) {
        localStorage.setItem("remember", JSON.stringify("true"));
        if (!JSON.parse(localStorage.getItem("users"))) {
            const users1 = [];
            localStorage.setItem("users", JSON.stringify(users1));
        }
        const users = JSON.parse(localStorage.getItem("users"));
        users.push(tempUser);
        localStorage.setItem("users", JSON.stringify(users));
    }
    else{
        localStorage.setItem("remember", JSON.stringify("false"));
        const user= [];
        user.push(tempUser);
        localStorage.setItem("user", JSON.stringify(user));
    }
}
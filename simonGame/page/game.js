//the colors divs
const lefTop = document.getElementById("left-top");
const righTop = document.getElementById("right-top");
const leftBottom = document.getElementById("left-bottom");
const rightBottom = document.getElementById("right-bottom");
//get the user details from the lical storage
let user = JSON.parse(localStorage.getItem("user"));
let users = JSON.parse(localStorage.getItem("users"));
const userName = document.getElementById("userName");
const errors = document.getElementById("errors");
const scores = document.getElementById("star");
const length = document.getElementById("steps");
const startNew = document.getElementById("startNew");

const startAudio = document.getElementById("startAudio");
const Audio1 = document.getElementById("1Audio");
const Audio2 = document.getElementById("2Audio");
const Audio3 = document.getElementById("3Audio");
const Audio4 = document.getElementById("4Audio");

//count the user click
let currenntClick = 0;
//check if stop the game
let stop = false;
let restart = false;
//get the speed from the lical storage
let speed=document.getElementById("speed").value;
//the speed of light for user click
let userTimeLight;
//the function setSpeed check the speed from the user and set it in the game

//the local speed for the function (user or computer)
let timeLight;
//true if the time to get click from the user
let timeToClick = false;

const player = {
    scores:user.scores,
    errors:user.errors,
    randColor:user.randColor
}

//board details
const board = {
    prevColor: ["left-top", "right-top", "left-bottom", "right-bottom"],
    currColor: ["leftTopOn", "rightTopOn", "leftBottomOn", "rightBottomOn"],
    arrElements: [lefTop, righTop, leftBottom, rightBottom],
    randColor: player.randColor
}

const setSpeed =(coose)=>{
    switch (coose) {
        case "0":{
            stop = true;
            timeToClick = false;
            break;
        }
        case "1":{
            speed = 800;
            userTimeLight = 500;
            break;
        }
        case "2":{
            speed = 500;
            userTimeLight = 300;
            break;
        }  
        case "3":{
            speed = 200;
            userTimeLight = 100;
            break;
        } 
    }
}
//setSpeed in the first time
setSpeed(speed);
//timer
let counter = 0;

//rand numbers between 0-4
const rand = () => Math.floor(Math.random() * 4);
//change color
const color = (part, prevColor, currColor) => {
    part.id = currColor;
    setTimeout(() => {
        part.id = prevColor;
    }, timeLight);
}

a();

//get index and arr and send the values to colorItem
const lightRandColor = (randColor) => {
    let index = 0;
    const intervalId = setInterval(() => {
        if (!stop) {
            colorItem(intervalId, index, randColor);
            index++;
        }
    },(timeLight*1.5));
}

//manage one item coloring and check if clearInterval is needed
const colorItem = (intervalId, index, randColor) => {
    if(restart){
        clearInterval(intervalId);
    }
    if (index >= randColor.length) {
         clearInterval(intervalId);
         timeToClick = true;
         timeLight = userTimeLight; 
         currenntClick = 0;
         checkStep();
        }
    else {
        timeLight = speed;
        color(board.arrElements[randColor[index]], board.prevColor[randColor[index]], board.currColor[randColor[index]]);
    }
}

//check if user press corect
const checkPress = (place) => {
    if (board.randColor[currenntClick] == place) {
        ++currenntClick;
    }
    else {
        ++player.errors;
        timeToClick = false;
        console.log(currenntClick);
        printMessage("oops!");
        redBorder();
        let wait = 0;
        setTimeout(() => {
            addUserDetails();
            if(player.errors == 3) {
                gameOver();
                wait = 2000;
            }
            setTimeout(() => {
                timeLight = speed;
                lightRandColor(board.randColor);
                currenntClick = 0;
            }, wait);
        }, 2000);
    }
}

const redBorder=()=>{
    document.getElementById("bott").style.boxShadow="0 -5px 29px #d34848, 0 1px 15px #f54b4b";
    setTimeout(() => {
        document.getElementById("bott").style.boxShadow=" 0 5px 15px #10121e, 0 -5px 15px #4c4f62";

    }, 2000);
}

// change color on click
document.addEventListener("click", function (event) {
    if (timeToClick) {
        switch (event.target.id) {
            case "left-top": {
                color(board.arrElements[0], board.prevColor[0], board.currColor[0]);
                checkPress(0);
                break
            }
            case "right-top": {
                color(board.arrElements[1], board.prevColor[1], board.currColor[1]);
                checkPress(1);
                break;
            }
            case "left-bottom": {
                color(board.arrElements[2], board.prevColor[2], board.currColor[2]);
                checkPress(2);
                break;
            }
            case "right-bottom": {
                color(board.arrElements[3], board.prevColor[3], board.currColor[3]);
                checkPress(3);
                break;
            }
        }
    }
    //switch for the controls bottons
    switch (event.target.id) {
        case "playStop":{
            const playStop = document.getElementById("playStop");
            if (playStop.textContent == "▷ start"){
                addUserDetails();
                playStop.innerText = "□ stop";
                stop = false;
                play();
            }
            else if (playStop.textContent == "▷ play") {
                playStop.innerText = "□ stop";
                stop = false;
                timeToClick = true;
            }
            else if (playStop.textContent == "□ stop"){
                playStop.innerText = "▷ play";
                stop = true;
                timeToClick = false;
            }
            break;
            }
        case "startNew":{
            restart=true;
            playStop.innerText = "▷ start";
            stop = false;
            timeToClick=false;
            player.randColor = [];
            board.randColor = [];
            player.scores = 0;
            player.errors = 0;
            currenntClick=0;
            addUserDetails();
            printMessage("good luck");
            setTimeout(() => {
                restart=false;
                play();
            }, 2000);
            break;
        }
        case "speed":{
            setSpeed(event.target.value);
            break;
        }
        case "out":{
            Out();
        }
    }
})

//print the maessags to the plyer
const printMessage = (string)=>{
    let x = document.createElement("div");
	x.textContent=string;
    x.id="message";
    document.body.appendChild(x);
       setTimeout(() => {
        document.getElementById("message").remove();
       }, 2000);
}

//start the game
const play = () => {
    if(player.errors == 3) {
        gameOver();
    }
    else{
        (board.randColor).push(rand());
        document.getElementById("steps").innerText = board.randColor.length;

        timeLight = speed;
        lightRandColor(board.randColor);
    }
}

//checkStep checks the if finsh click or time every seconds
function checkStep() {
    counter += 1000;
    if (currenntClick < board.randColor.length) {
        window.setTimeout(checkStep, 100);
    } 
    else if(currenntClick!=0) {
        timeToClick = false;
        let wait=100;
        player.scores = board.randColor.length;
        document.getElementById("steps").innerText = board.randColor.length;
        if(board.randColor.length%3 == 0){
            document.getElementById("star").textContent += "⭐ ";
            printMessage("bravo!!!");
            wait=2000;
        }
        play();
    }
}

//in case the game is over clean and print a message
const gameOver = ()=>{
        stop = true;
        player.randColor = [];
        board.randColor = [];
        player.scores = 0;
        player.errors = 0;
        currenntClick=0;
        document.getElementById("playStop").innerText = "▷ start";
        printMessage("game over!");
        redBorder();
}




//add the user details to the screen
function addUserDetails(){
    userName.innerText = user.uname;
    errors.innerText = player.errors;
    scores.innerText=null;
    if(board.randColor.length == currenntClick){
        for(let i=1; i*3 <= board.randColor.length ; ++i){
            scores.innerText += "⭐ ";
        }
    }
    else{
        for(let i=1; i*3 <= board.randColor.length-1 ; ++i){
            scores.innerText += "⭐ ";
        }
    }
    length.innerText = board.randColor.length;
}

function a(){
    const tempUser = {
        "Email": user.Email,
        "uname": user.uname,
        "Password": user.Password,
        "randColor": player.randColor,
        "scores": player.scores,
        "errors": player.errors
    }
    localStorage.setItem("user", JSON.stringify(tempUser));
    for(let i = 0;i < users.length;++i){
        if (users[i].uname == tempUser.uname && users[i].Password == tempUser.Password && users[i].Email == tempUser.Email) {
            users[i] = tempUser;
            break;
        }
    }
    window.setTimeout(a, 100);
}

function Out(){
    localStorage.setItem("member", JSON.stringify(false));
    localStorage.setItem("user", JSON.stringify(null));
    window.open("./index.html", "_self");
}
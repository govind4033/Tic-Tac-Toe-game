let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector(".Reset");
let msgContainer = document.querySelector(".msg-container");
let newgamebtn = document.querySelector(".new-btn");
let p = document.querySelector("#msg");

let count = 0;
let turnO = true;

const winpattterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
     turnO = true;
     count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();
        if (count === 9 && !isWinner) {
        gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box  of boxes ){
        box.disabled = true;
        }
};

const enableBoxes = () => {
    for(let box  of boxes ){
        box.disabled = false;
        box.innerText = "";
        }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpattterns) {
        let pos1val = boxes [pattern[0]].innerText;
        let pos2val = boxes [pattern[1]].innerText;
        let pos3val = boxes [pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
Resetbtn.addEventListener("click", resetgame);

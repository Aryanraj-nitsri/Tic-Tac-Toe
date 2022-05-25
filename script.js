let tingMusic = new Audio("ting.mp3");
let gameOver = new Audio("music.mp3");
let turn = "X";
const gameInfo=document.getElementsByClassName("gameInfo")[0];
let container = document.getElementsByClassName("container")[0];
function changeTurn() {
    return turn === "X" ? "0" : "X";

}
//logic for game
const image=document.querySelector(".image>img");
let content = document.querySelectorAll(".item1");
var winner = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach((element) => {
        if ((content[element[0]].textContent === content[element[1]].textContent) && (content[element[1]].textContent === content[element[2]].textContent) && content[element[0]].textContent !== "") {
            gameInfo.textContent=`${content[element[0]].textContent} won`
            container.removeEventListener("click",game)
            image.style.width="250px";
            gameOver.play();
                
            
        }
    })
}



container.addEventListener("click", game) 
function game(e){


    if (e.target.textContent === "") {
        tingMusic.play();
        e.target.textContent = turn;
        turn = changeTurn();
gameInfo.textContent=`Turn for ${turn}`
winner();
}


}
const button= document.getElementById("btn")
button.addEventListener("click",()=>{
    content.forEach((element)=>{
        element.textContent="";
        image.style.width="0px"
        gameInfo.textContent="";
        gameOver.pause();
        container.addEventListener("click", game) 
    })
})

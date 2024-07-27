let mybtns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".rstbtn");
let winnerpara = document.querySelector("h2");
let xturn = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

mybtns.forEach( (btn) => {
    btn.addEventListener( "click", () => {
        if (xturn)
        {
            btn.innerText = "X";
            btn.style.background = "red";
            xturn =false;
        }
        else
        {
            btn.innerText = "O";
            btn.style.background = "blue";
            xturn = true;
        }
        count++;
        btn.disabled = true;
        let winner = CheckWinner(btn);
        if (winner)
        {
            mybtns.forEach( (btn) => {btn.disabled = true;});
            winnerpara.innerText = `${btn.innerText} is the winner!!`;
            winnerpara.classList.remove("hidden");
        }
        
        if(!winner && count == 9)
        {
            winnerpara.innerText = "Its a Draw";
            winnerpara.classList.remove("hidden");
        }
    } );
});

resetbtn.addEventListener("click", () => {
    for(let btn of mybtns)
    {
        btn.disabled = false;
        btn.innerText = "";
        btn.style.background = "white";
    }
    winnerpara.classList.add("hidden");
});

const CheckWinner = (btn) => {
    for(let pattern of winPatterns)
    {
        let posval1 = mybtns[pattern[0]].innerText;
        let posval2 = mybtns[pattern[1]].innerText;
        let posval3 = mybtns[pattern[2]].innerText;

        if(posval1 != "" && (posval1 == posval2 && posval2 == posval3))
            return true;
    }
    return false;
};

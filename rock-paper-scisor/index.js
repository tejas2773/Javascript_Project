let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.img')
const h2=document.querySelector('.h2')
const userScorePara=document.querySelector('#user-Score')
const compScorePara=document.querySelector('#comp-Score')

choices.forEach((e)=>{                                // e gives each element by using for loop
    e.addEventListener('click',()=>{
       const userChoice=e.getAttribute('id')
        playgame(userChoice)
    })
})


const playgame=(userChoice)=>{
    console.log('user choice is',userChoice)
    const com=compChoice()
    console.log('comp choice is',com)

    if(userChoice===com)
    {
        drawgame();
    }
    else
    {
        let userWin=true                                 // declare userwin boolean
        if(userChoice==='rock')
        {
            userWin = com ==='paper'?false : true           // userwin= condition ? false : true
        }
        else if(userChoice==='paper')
        {
            userWin = com ==='scissor' ? false : true
        }
        else{
            userWin = com ==='rock' ? false : true
        }
        showWinner(userWin)
    }
}

const drawgame=()=>{
    console.log('game is draw')
    h2.innerText='game is draw'
    h2.style.backgroundColor='blue'
}

const showWinner=(userWin)=>{
    if(userWin==true)
    {
        userScore++
        userScorePara.innerHTML=userScore
        h2.innerText='you win'
        h2.style.backgroundColor='green'
    }
    else
    {
        compScore++
        compScorePara.innerHTML=compScore
        h2.innerText='you lose'
        h2.style.backgroundColor='red'
    }
}


const compChoice=()=>{
    const option=['rock','paper','scissor']
    const ranIndx=Math.floor(Math.random()*3)     // math.floor- gives whole number. 
                                                 // math.random()-gives random num.
                                                 //3- gives limit upto 0 to 2 
    return option[ranIndx]
}
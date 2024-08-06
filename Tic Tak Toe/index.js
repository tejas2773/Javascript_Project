let boxes=document.querySelectorAll('.box')
let reset=document.querySelector('.reset')
let msg=document.querySelector('.msg')
let win=document.querySelector('#win')
let hide=document.querySelector('.hide')

let turn0=true                    // game has 2 player 'X' and 'O'. so we give value boolean
let count=0                       //  to check draw condition
const winPattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((i)=>{
    i.addEventListener('click',()=>{
        if(turn0==='true')
        {
            i.innerText='O'
            win.innerText='Turn For X'              
            turn0='false'                          // change turn to x
                                  
        }
        else{
            i.innerText='X'
            win.innerText='Turn For O'
            turn0='true'                          // change turn to O
            
        }
        i.disabled='true'                        //when buttons click,it disables
        checkWinner()
        count++                                 
        draw()
    })
})

const checkWinner=()=>{
    for(i of winPattern)
    {
        // console.log(i[0],i[1],i[2])            // gives winning pattern 
        // console.log(boxes[i[0]].innerText,     // access box with index no of winning pattern 
        //boxes[i[1]].innerText,                  // innertext- shows x or y
       // boxes[i[2]].innerText)                  
        
        let position1=boxes[i[0]].innerText
        let position2=boxes[i[1]].innerText
        let position3=boxes[i[2]].innerText

        if(position1!=''&& position2!=''&& position3!='')
        {
            if(position1===position2 && position2===position3)
            {
                // console.log('winner',position1)
                showWinner(position1)
            }
        }
    }
}

const showWinner=(position1)=>{
    win.innerText=`Congrats Winner is ${position1}`
    disableBox()                                    // it disables all buttons to stop the game
}

const disableBox=()=>{
    for(i of boxes)
    {
        i.disabled=true
    }
}

const enableBox=()=>{
    for(let i of boxes)
    {
        i.disabled=false
        i.innerText=""
    }
}

const restart=()=>{
    turn0=true
    win.innerText=''    
    enableBox()               
}

reset.addEventListener('click',()=>{
    restart()
})


const draw=()=>{
    if(count==9)
    {
        win.innerText='game is draw'
        disableBox()
    }
}
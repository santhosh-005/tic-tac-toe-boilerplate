const box=document.getElementsByClassName("box");

const result=document.getElementById("result");
const msg=document.getElementById("message")
const playAgain=document.getElementById("button")

for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',()=>{handleText(i)})
}

let finalResult=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
xArray=[];
yArray=[];

let turn="X";
let count=0;

function handleText(index){
    if(box[index].innerHTML==""){
        if(count%2==0){
            box[index].innerText=turn
            turn="O"
            xArray.push(index)
            checkWinningCombination(finalResult,xArray,turn);
            
        }else if(count%2!=0){
            box[index].innerText=turn
            turn="X"
            yArray.push(index)
            checkWinningCombination(finalResult,yArray,turn);
            
        }
            
        
        // checkLogic();
        count++;
       
    }
}
let flag=true

function checkWinningCombination(finalResult,array,turn){
    let gameArr=[]
    for(let i=0;i<finalResult.length;i++){

        if(Array.isArray(finalResult[i])){
        checkWinningCombination(finalResult[i],array,turn)
    }else{
        if(array.includes(finalResult[i])){
            gameArr.push(true)
        }else{
            gameArr.push(false)
        }
    }
}
if(gameArr.every((el)=>el==true) && gameArr.length==3){
    result.style.visibility="visible";
    msg.innerText=`${turn=="X"?"O":"X"} Won`
    flag=false;
}

else if(count== 8 && flag==true){
    result.style.visibility="visible"
    msg.innerText="It's Tie"
}
}

// function checkLogic(){
//     if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX" || 
//     box[3].innerText+box[4].innerText+box[5].innerText=="XXX" ||
//     box[6].innerText+box[7].innerText+box[8].innerText=="XXX" ||
//     box[0].innerText+box[3].innerText+box[6].innerText=="XXX" ||
//     box[1].innerText+box[4].innerText+box[7].innerText=="XXX" ||
//     box[2].innerText+box[5].innerText+box[8].innerText=="XXX" ||
//     box[0].innerText+box[4].innerText+box[8].innerText=="XXX" ||
//     box[2].innerText+box[4].innerText+box[6].innerText=="XXX" ){
//         result.style.visibility="visible"
//         msg.innerText="X WON THE MATCH"
//         flag=false
//         console.log("X won")
//     }else if(box[0].innerText+box[1].innerText+box[2].innerText=="OOO"||
//     box[3].innerText+box[4].innerText+box[5].innerText=="OOO" ||
//     box[6].innerText+box[7].innerText+box[8].innerText=="OOO" ||
//     box[0].innerText+box[3].innerText+box[6].innerText=="OOO" ||
//     box[1].innerText+box[4].innerText+box[7].innerText=="OOO" ||
//     box[2].innerText+box[5].innerText+box[8].innerText=="OOO" ||
//     box[0].innerText+box[4].innerText+box[8].innerText=="OOO" ||
//     box[2].innerText+box[4].innerText+box[6].innerText=="OOO"  ){
//         result.style.visibility="visible"
//         msg.innerText="O WON THE MATCH"
//         flag=false
//         console.log("O won")
//     }else if(count== 8 && flag==true){
//         result.style.visibility="visible"
//         msg.innerText="It's Tie"
//     }

// }


playAgain.addEventListener('click',()=>{
    window.location.reload();
})
let boxes=document.querySelectorAll(".unit");
let turnO=true;

const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((unit)=>{
    unit.addEventListener("click",()=>{
        if(turnO){
            unit.innerText="O";
            turnO=false;
        }else{
            unit.innerText="X";
            turnO=true;
        }
        unit.disabled=true;
        winner();
    });
});
const winner=()=>{
   for(let pattern of win){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&& val2===val3)
                wone("Winner is Player ", val1);
        }
   } 
};
let reset=document.querySelector(".reset");

reset.addEventListener("click",()=>{
    boxes.forEach(unit=>{
        unit.innerText="";
        unit.disabled=false;

    });

});




const wone=(msg,ms)=>{
    boxes.forEach(unit=>{
        unit.disabled=true;

    });
    reset.style.display="none";
    const para = document.createElement("p");
    para.id="winner";
    para.style.color="black";
    para.innerText=msg+ms;
    const element = document.querySelector("h1");
    element.appendChild(para);

    const start = document.createElement("button");
    start.id="start";
    start.style.color="antiquewhite";
    start.style.fontSize="1rem";
    start.style.height="10vh";
    start.style.width="20vw";
    start.style.backgroundColor="#470101";
    start.style.borderRadius="2rem"; 
    start.innerText="START NEW GAME";
    const ele = document.querySelector("body");
    ele.appendChild(start);
    

    start.addEventListener("click",()=>{
        boxes.forEach(unit=>{
            unit.innerText="";
            unit.disabled=false; 
        });
        const para = document.querySelector("#winner");
        para.remove(); 
        reset.style.display="inline-block";
        start.remove();
    })
}



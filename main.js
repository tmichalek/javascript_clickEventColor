
let x=0;
let y=0;
const body=document.body;
const h1= document.querySelector("h1");

document.body.addEventListener("click", (e)=>{

    x = e.clientX;
    y = e.clientY;

    if (x%2 ==0 && y%2==0)
    {
        body.style.backgroundColor="green";
    }

    else if (x%2!=0 && y%2!=0)
    {
        body.style.backgroundColor="red";
    
    }

    else  {body.style.backgroundColor="blue";}

    h1.textContent=`${e.clientX}, ${e.clientY}`;

})
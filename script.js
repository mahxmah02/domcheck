var pbtn=document.querySelectorAll(".plus-btn");
var qant=document.querySelectorAll(".Quant");
var mbtn=document.querySelectorAll(".minus-btn");
var like=document.querySelectorAll(".like");
var dele=document.querySelectorAll(".delete");
var pri=document.querySelectorAll(".price");
var fp=document.getElementById("finalPrice");



function som () {
    let s=0;
    for(let i=0;i< qant.length;i++)
    {
           s+=(parseInt(qant[i].value)*parseInt(pri[i].innerHTML));
    }
    return s ;
}


for (let i = 0; i < pbtn.length; i++) {
pbtn[i].addEventListener('click',()=>qant[i].value=parseInt(qant[i].value)+1 );
}
for (let i = 0; i < mbtn.length; i++) {
mbtn[i].addEventListener('click',()=>{
    if(parseInt(qant[i].value)>0){
        qant[i].value=parseInt(qant[i].value)-1 
    }
   
}
)
}


//like button
for (let i=0;i< like.length;i++)
{
    like[i].addEventListener('click',()=>{
        if(like[i].style.color == "black"){
            like[i].style.color="red"
        }
        else{
            like[i].style.color="black"
        }
    })

}
for (let i=0 ; i<dele.length;i++)
{
    dele[i].addEventListener('click',()=>
        {
            qant[i].value=0;
            dele[i].parentNode.remove()
        }
    );
    
}
/*
for (let i=0;i<qant.length;i++)
pbtn[i].addEventListener('click',()=>{fp.value=som()})  
 */ 
fp.value=som()
for (let i=0;i<qant.length;i++){
pbtn[i].addEventListener('click',()=>{fp.value=som()})
mbtn[i].addEventListener('click',()=>{fp.value=som()})
dele[i].addEventListener('click',()=>{fp.value=som()});

}
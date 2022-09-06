var pbtn=document.querySelectorAll(".plus-btn")
var qant=document.querySelectorAll(".Quant");
for (let i = 0; i < pbtn.length; i++) {
pbtn[i].addEventListener('click',()=>qant[i].value=parseInt(qant[i].value)+1 );
}

var mbtn=document.querySelectorAll(".minus-btn")
var qant=document.querySelectorAll(".Quant");
for (let i = 0; i < pbtn.length; i++) {
mbtn[i].addEventListener('click',()=>qant[i].value=parseInt(qant[i].value)+1 );
}
var fp=document.querySelector("#finalPrice") 
var price=document.getElementsByClassName('price')
for (let i = 0; i < qant.length; i++) 
{
    fp.value+=qant[i].value*parseInt(price[0].innerHTML);
}

 
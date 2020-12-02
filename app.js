function modifiText(para,text){
    para = document.getElementById(para);
    para.innerHTML = text;
}

for(let i in document.getElementsByTagName("p")){
    modifiText("p"+i,Math.random());
}

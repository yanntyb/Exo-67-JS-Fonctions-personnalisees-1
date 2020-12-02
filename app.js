function modifiText(para,text){
    para = document.getElementById(para);
    para.innerHTML = text;
}

for(let i = 1;i<6;i++){
    modifiText("p"+i,Math.random());
}

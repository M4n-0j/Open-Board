let toolsCont=document.querySelector(".tools-cont");
let optionsCont=document.querySelector(".options-cont");
let pencilToolCont=document.querySelector(".pencil-tool-cont");
let eraserToolCont=document.querySelector(".eraser-tool-cont");
let eraser=document.querySelector(".eraser");
let pencil=document.querySelector(".pencil");
let pencilFlag=false;
let eraserFlag=false;
let optionsFlag=true;
//true -> tools show,false->hide tools
optionsCont.addEventListener("click",(e)=>{
  optionsFlag=!optionsFlag;
  if(optionsFlag){
    openTools();
  }
  else{
    closeTools();
  }
})
function openTools(){
let iconElem=optionsCont.children[0];
iconElem.classList.remove("fa-times");
iconElem.classList.add("fa-bars");
toolsCont.style.display="flex";


}
function closeTools(){
    let iconElem=optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display="none"
    pencilToolCont.style.display="none";
    eraserToolCont.style.display="none";
}
pencil.addEventListener("click",(e) =>{
    //true ->show pencil tool, false -> hide pencil
    pencilFlag=!pencilFlag;
    console.log(pencilFlag);
    if(pencilFlag){
       
        pencilToolCont.style.display="block";
    }
    else{
        
        pencilToolCont.style.display="none";
    }
})
eraser.addEventListener("click",(e) =>{
    //true ->show pencil tool, false -> hide pencil
    eraserFlag= !eraserFlag;
    if(eraserFlag){
        eraserToolCont.style.display="flex";
    }
    else{
        eraserToolCont.style.display="none";
    }
})
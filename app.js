let number=0;
let btn_reset=document.getElementById("btn_res");
let btn_inc=document.getElementById("btn_inc");
let btn_dec=document.getElementById("btn_dec");
let screen=document.getElementById("number");
let sound=document.getElementById("audio");
document.getElementById("number").innerText=0;
// local strage
function saveToLS(number) {
    localStorage.setItem("number",JSON.stringify(number));
};
function getFromLS() {
    let temporary=JSON.parse(localStorage.getItem("number"));
    return temporary;
}
function loadFromLS() {
    number=getFromLS();
    screen.innerText=number;
}

// events
function  events() {
    btn_reset.addEventListener("click",(e)=>{
        number=0;
        if(number==0){
            screen.style.color="black";
        }
        sound.play();
        saveToLS(number);
        screen.innerText=number;
        e.preventDefault();
        });
        
        btn_dec.addEventListener("click",(e)=>{
            number--;
            screen.innerText=number;
            if(number<0){
                screen.style.color="red";
            }
            sound.play();
            saveToLS(number);
            e.preventDefault();
        });
        
        btn_inc.addEventListener("click",(e)=>{
            number++;
            screen.innerText=number;
            if(number>0){
                screen.style.color="green";
            }
            sound.play();
            saveToLS(number);
            e.preventDefault();
        });
    
}
// start
loadFromLS();
events();

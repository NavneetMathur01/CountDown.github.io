const bDay = "29 January 2023";
const inputs = document.querySelectorAll("input");
document.getElementById("bDay").innerText = bDay;

function clock(){
    const end = new Date(bDay);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);
}

clock();
setInterval( ()=>{
    clock();
},1000)
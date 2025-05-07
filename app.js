function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour12: false });
  
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const date = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    document.getElementById("time").textContent = time;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
  }
  setInterval(updateClock, 1000);
  updateClock();

const colors=  [
    {
        id:"white",
        bodyBgColor:"#e0e0e0",
        clockBg:"#e0e0e0",
        clockShadow1:"#bebebe",
        clockShadow2:"#ffffff",
        clockTextColor:"#3f3434",
        clockDateTextColor:"#333333"

    },
    {
        id:"blue",
        bodyBgColor:"#5760D9",
        clockBg:"#424CD4",
        clockShadow1:"#2d38cf",
        clockShadow2:"#6c74dd",
        clockTextColor:"#e2e2e2",
        clockDateTextColor:"#e2e2e2"

    },
    {
        id:"purple",
        bodyBgColor:"#b657d9",
        clockBg:"#ad42d4",
        clockShadow1:"#8324a6",
        clockShadow2:"#bf6cdd",
        clockTextColor:"#514747",
        clockDateTextColor:"#514747"
    },{
        id:"dark maroon",
        bodyBgColor:"#0d0607",
        clockBg:"#261114",
        clockShadow1:"#33171a",
        clockShadow2:"#0d0607",
        clockTextColor:"#514747",
        clockDateTextColor:"#514747"
    },{
        id:"jade",
        bodyBgColor:"#215018",
        clockBg:"#275d1c",
        clockShadow1:"#327824",
        clockShadow2:"#215018",
        clockTextColor:"#87b67e",
        clockDateTextColor:"#87b67e"
    }
]

let body=document.querySelector("body")
let clock=document.querySelector(".clock")
let time=document.querySelector("#time")
let date=document.querySelector("#date")
//date.style.color="#e2e2e2"
//clock.style.background="#261114"
//body.style.backgroundColor="#0d0607"
let counter=0
clock.addEventListener("click",()=>{
    counter++;
    let index=counter%colors.length;
    body.style.backgroundColor=colors[index].bodyBgColor;
    clock.style.background=colors[index].clockBg;
    clock.style.boxShadow=`10px 10px 20px ${colors[index].clockShadow1} , -10px -10px 20px ${colors[index].clockShadow2}`;
    clock.style.color=colors[index].clockTextColor;
    time.style.boxShadow=`inset 5px 5px 10px ${colors[index].clockShadow1}, inset -5px -5px 10px ${colors[index].clockShadow2}`;
    time.style.color=colors[index].clockTextColor;
    date.style.color=colors[index].clockDateTextColor;
    console.log(`color changed to ${colors[index].id} , ${index}` );
    
})
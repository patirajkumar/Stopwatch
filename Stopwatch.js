let run=false;
let hr=0;
let min=0;
let sec=0;
let msec=0;
let i=0;
let srt=document.getElementById("strt");
let lp=document.getElementById("lpr");
let h=document.getElementById("hour");
let m=document.getElementById("min");
let s=document.getElementById("sec");
let ms=document.getElementById("msec");
let li=document.getElementById("list");
function stwt(){
 let bt=srt.innerText;
 if(bt=="START"){
   srt.innerText="STOP";
   srt.style.background="cyan";
   srt.style.color="red";
   lp.disabled=false;
   run=true;
   intr=setInterval(start,10);
}
 if(bt=="RESUME"){
   lp.innerHTML="LAP";
   srt.innerText="STOP";
   srt.style.background="cyan";
   srt.style.color="red";
   run=true;
   intr=setInterval(start,10);
}
 if(bt=="STOP"){
   srt.innerText="RESUME";
   srt.style.background="darkblue";
   srt.style.color="darkgrey";
   run=false;
   lp.innerHTML="RESET";
   clearInterval(intr);
}
}
function start(){
 if(run==true){
   msec=msec+1;
   if(msec==100){
   sec++;
   msec=0;
}
if(sec>59){
   min++;
   sec=0;
   msec=0;
}
if(min>59){
   hr++;
   min=0;
   sec=0;
   msec=0;
}
 if(hr<10){
   h.innerHTML="0"+hr;
}
 else{
   h.innerHTML=hr;
}
 if(min<10){
   m.innerHTML="0"+min;
}
 else{
   m.innerHTML=min;
}
 if(sec<10){
   s.innerHTML="0"+sec;
}
 else{
   s.innerHTML=sec;
}
 if(msec<10){
   ms.innerHTML="0"+msec;
}
 else{
   ms.innerHTML=msec;
}
}
}
function lapr(){
 lpv=lp.innerHTML;
 if(lpv=="RESET"){
   window.location.reload();
 }
 if(lpv=="LAP"){
   let ls=document.createElement("li");
   let div1=document.createElement("div");
   let div2=document.createElement("div");
   let laph="";
   let lapm="";
   let laps="";
   let lapms="";
   if(hr<10){
     laph="0"+hr;
   }
   else{
     laph=hr;
   }
   if(min<10){
     lapm="0"+min;
   }
   else{
     lapm=min;
   }
   if(sec<10){
     laps="0"+sec;
   }
   else{
     laps=sec;
   }
   if(msec<10){
     lapms="0"+msec;
   }
   else{
     lapms=msec;
   }
   div1.innerHTML="LAP: "+(++i);
   div2.innerHTML=laph+":"+lapm+":"+laps+":"+lapms;
   li.appendChild(ls);
   ls.appendChild(div1);
   ls.appendChild(div2);
 }
}

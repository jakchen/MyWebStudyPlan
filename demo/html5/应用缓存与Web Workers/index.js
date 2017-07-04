var numDiv;
window.onload=function(){
  numDiv=document.getElementById("numDiv");
  var work = new Worker("count.js");
  work.onmessage=function(e){
    numDiv.innerHTML=e.data;
  }
}
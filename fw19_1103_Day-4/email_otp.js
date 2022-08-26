
function clickEvent(first,last)
{
  if(first.value.length)
  {
     document.getElementById(last).focus();
     }
}

document.getElementById("statement").innerHTML= `We sent a 4-digit code to ${localStorage.getItem("num")}`;
document.getElementById("fourth").addEventListener("keyup" , function(){
if( document.getElementById("fourth").value.length == 1){
// window.location.href = "login.html";

process();
}
})

// <------------------------setTimeOut-------------------------------->
function process(){
document.getElementById("inner_div").innerHTML= null;
document.getElementById("buff").src="https://www.mcleodgolf.com.au/wp-content/plugins/wp-restaurant-booking/images/loading.gif"; 

setTimeout(function(){
   
window.location.href = "index.html";
},2000);



};

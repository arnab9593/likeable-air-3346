
document.getElementById("telephone").addEventListener("keyup" , function (){
    ;
     let mail =document.getElementById("telephone").value;
     if( mail.includes(".com"))
     {
         document.getElementById("next").disabled = false;
         document.getElementById("next").classList.add("phone");
         document.getElementById("next").style.cursor="pointer";
     }
     else{
         document.getElementById("next").disabled = true;
         document.getElementById("next").classList.remove("phone");
         document.getElementById("next").style.cursor="not-allowed";
     }
 
    
 })

 
document.getElementById("next").addEventListener("click" , function()
{   
    localStorage.setItem("num",document.getElementById("telephone").value);
    process();

    
})

// <------------------------setTimeOut-------------------------------->

function process(){
    document.getElementById("inner_div").innerHTML= null;
    document.getElementById("buff").src="https://www.mcleodgolf.com.au/wp-content/plugins/wp-restaurant-booking/images/loading.gif"; 

     setTimeout(function(){
       
    window.location.href = "email_otp.html";
    },2000);




};

document.getElementById("telephone").addEventListener("keyup" , function (){
   ;

    if( document.getElementById("telephone").value.length == 10)
    {
        document.getElementById("next").disabled = false;
        document.getElementById("next").classList.add("phone");
    }
    else{
        document.getElementById("next").disabled = true;
        document.getElementById("next").classList.remove("phone");
    }
   

    
})

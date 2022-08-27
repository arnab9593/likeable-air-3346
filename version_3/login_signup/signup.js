let arrData= JSON.parse(localStorage.getItem("loginData")) || [];
    
      
   
     document.querySelector("form").addEventListener("submit",checkdata);
   
    function checkdata(event){
        event.preventDefault();
        let obj={
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            psd: document.querySelector("#psd").value,
            current_psd: document.querySelector("#cur_psd").value
        };
        // arrData.push(obj);
        
       
        let Pass = document.querySelector("#psd").value;
        let curr_Pass = document.querySelector("#cur_psd").value;
        
         let ls_data = JSON.parse(localStorage.getItem("loggedin")) || [];
         let flag = true;
         ls_data.forEach(function(el) {
             
            if(el.email == document.querySelector("#email").value){
               flag = false;
                alert("Email already Exist"); 
             document.querySelector("#name").value=null;
             document.querySelector("#email").value=null;
             document.querySelector("#psd").value=null;
             document.querySelector("#cur_psd").value= null;
            }

         })
          
         if (flag == true)
         {
            if(Pass == curr_Pass  && flag == true)
           {    
            arrData.push(obj);
            localStorage.setItem("loggedin",JSON.stringify(arrData));
               
               alert("Signup Successful");
               console.log(arrData);
              let name= document.querySelector("#name").value
               sessionStorage.setItem("signup_username",name);
               window.location.href="../index.html";  
              
           }  
  
     else
     {
        alert("Password Mismatch");
     }
         }
         
}
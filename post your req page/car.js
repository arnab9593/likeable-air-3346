import { back } from "./back.js";

document.getElementById("M_back").innerHTML=back()

document.getElementById("btn").addEventListener("click",function(){
   window.location.href="./sellproduct.html"
})

 
function ip(id){
    return document.getElementById(id)
}
document.getElementById("post").addEventListener("click",userip)


document.getElementById("cng").addEventListener("click",function(){
    getcng(this.innerText)

    
})
document.getElementById("disel").addEventListener("click",function(){
    getcng(this.innerText)

    
})
document.getElementById("petrol").addEventListener("click",function(){
    getcng(this.innerText)

    
})
document.getElementById("electric").addEventListener("click",function(){
    getcng(this.innerText)

    
})
document.getElementById("auto").addEventListener("click",function(){
    trans(this.innerText)

    
})
document.getElementById("manual").addEventListener("click",function(){
    trans(this.innerText)

    
})
document.getElementById("one").addEventListener("click",function(){
    owner(this.innerText)

    
})
document.getElementById("two").addEventListener("click",function(){
    owner(this.innerText)

    
})
document.getElementById("three").addEventListener("click",function(){
    owner(this.innerText)

    
})
document.getElementById("four").addEventListener("click",function(){
    owner(this.innerText)

    
})
function owner(t){
    localStorage.setItem("owner",t)
}
function trans(a){
    localStorage.setItem("trans",a)
}


function getcng(e){
    localStorage.setItem("fueltype",e)
}

let delip=(id)=>{
    return document.getElementById(id).value=null
}

 async function userip(){
    let brand=ip("select").value
    let manufactured_year=ip("year").value

    let fuel_type=localStorage.getItem("fueltype")
    let trans=localStorage.getItem("trans")
    let no_of_owner=localStorage.getItem("owner")

    let title=ip("titel").value
    let img_url=ip("img").value
    let description=ip("des").value
    let state=ip("state").value
    let price=ip("pr").value
    let name=ip("name").value
    let year=ip("year").value
    let km_driven=ip("km").value

    let postdata={brand,manufactured_year,state,price,fuel_type,trans,no_of_owner,title,img_url,description,name,year,km_driven}
    

    const link=`http://localhost:3000/api/useripdata`

    let res=await fetch(link,{
        method:"POST",
        body:JSON.stringify(postdata),
        headers:{
            "content-type":"application/json"
        }
    })
    res=await res.json()
    console.log(res);
    delip("year")
    delip("select")
    delip("titel")
    delip("img")
    delip("des")
    delip("state")
    delip("pr")
    delip("name")
    delip("km")

    

}
let countarr=JSON.parse(localStorage.getItem("count"))||[]
let count=0
document.getElementById("post").addEventListener("click",cata)
function cata(){
count++
countarr.push(count)
localStorage.setItem("count",JSON.stringify(countarr))

   
    window.location.href="../my add section/redirectedpage.html"
}
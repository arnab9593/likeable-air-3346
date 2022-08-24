const link=`http://localhost:3000/api/bikes`


let ft=async()=>{
    let res=await fetch(link)
    res=await res.json()
    
console.log(res);
    
}

window.onload=()=>{
ft()
}
document.getElementById("submit").addEventListener("click",submit)

let value=(id)=>{
    return document.getElementById(id)
}
let nul=(id)=>{
    return document.getElementById(id).value=null
}

 async function submit(e){
e.preventDefault()
  let img1=value("img1").value
  let img2=value("img2").value
  let img3=value("img3").value
  let img4=value("img4").value

  let bikename=value("bikename").value
  let brand=value("company").value
  let catagorie=value("cata").innerText
  let description=value("des").value
  let model =value("model").value
  let manufacured_year=value("manufacture").value
  let km_driven=value("km").value
  let price=value("price").value

  let seller_name=value("sname").value
  let seller_no=value("no").value
  let seller_on_olx=value("since").value

  let bike_data={img1,img2,img3,img4,bikename,brand,catagorie,description,model,manufacured_year,km_driven,price,seller_name,seller_no,seller_on_olx}
  nul("img1")
  nul("img2")
nul("img3")
nul("img4")
nul("bikename")
nul("company")
nul("des")
nul("model")
nul("manufacture")
nul("km")
nul("sname")
nul("no")
nul("since")
nul("price")


  

   let res=await fetch(link,{
    method:"POST",
    body:JSON.stringify(bike_data),
    headers:{
        "content-type":"application/json"
    }
   })
   res=await res.json()
   console.log(res);
}

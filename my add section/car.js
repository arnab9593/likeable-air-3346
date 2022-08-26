

// let displayDomData = (el) => {
//     let box = document.querySelector(".l_first");
//     let box1 = document.querySelector(".r_first");
//     let box2 = document.querySelector(".l_second");
//     let box3 = document.querySelector(".h_discription");
//     let box4 = document.querySelector(".div1_ho");
//     let box5 = document.querySelector(".div2_ho");
//     let box6 = document.querySelector(".div3_ho");
//     let box7 = document.querySelector(".r_second");

//     const div = document.createElement("div");
//     div.setAttribute("class", "h_div");

//     const image = document.createElement("img");
//     image.src = el.image;
//     image.setAttribute("class", "h_img_1");

//     const price = document.createElement("h1");
//     price.innerText = `₹ ${el.price}`;
//     price.setAttribute("class", "h_price");

//     const model = document.createElement("h1");
//     model.innerText = el.model;
//     // console.log(model);

//     const fuel = document.createElement("p");
//     fuel.innerText = el.fuel;
//     fuel.setAttribute("class", "h_fuel");

//     const km = document.createElement("p");
//     km.innerText = el.km;
//     km.setAttribute("class", "h_km");

//     const carname = document.createElement("p");
//     carname.innerText = `Model - ${el.model}`;
//     carname.setAttribute("class", "overview_h");

//     const fuelTank = document.createElement("p");
//     fuelTank.innerText = `Fuel - ${el.fuel}`;
//     fuelTank.setAttribute("class", "overview_h");

//     const Overview_Km = document.createElement("p");
//     Overview_Km.innerText = `Km - ${el.km}`;
//     Overview_Km.setAttribute("class", "overview_h");

//     const location_h = document.createElement("p");
//     city = el.location
//     location_h.innerText = `Location - ${el.location}`;
//     location_h.setAttribute("class", "overview_h");

//     const accident = document.createElement("p");
//     accident.innerText = `Accident - ${el.accident}`;
//     accident.setAttribute("class", "overview_h");

//     const color = document.createElement("p");
//     color.innerText = `Color - ${el.color}`;
//     color.setAttribute("class", "overview_h");

//     const engine = document.createElement("p");
//     engine.innerText = `Engine cc - ${el.engine}`;
//     engine.setAttribute("class", "overview_h");

//     const month = document.createElement("p");
//     month.innerText = `Making Month - ${el.makeMonth}`;
//     month.setAttribute("class", "overview_h");

//     const reg = document.createElement("p");
//     reg.innerText = `Registration Place - ${el.regPlace}`;
//     reg.setAttribute("class", "overview_h");

//     const finance = document.createElement("p");
//     finance.innerText = `Finance - ${el.finance}`;
//     finance.setAttribute("class", "overview_h");

//     const tyre = document.createElement("p");
//     tyre.innerText = `Tyre - ${el.tyre}`;
//     tyre.setAttribute("class", "overview_h");

//     const owner = document.createElement("h4");
//     owner.innerText = el.owner;
//     owner.setAttribute("class", "owner_h");

//     const loc = document.createElement("h4");
//     loc.innerText = el.location;
//     loc.setAttribute("class", "owner_h");

//     const pos = document.createElement("h4");
//     pos.innerText = el.date;
//     pos.setAttribute("class", "owner_h");

//     const seller_name = document.createElement("h4");
//     seller_name.innerText = `Name - ${el.seller_name}`;
//     seller_name.setAttribute("class", "h_seller_name");

//     const seller_no = document.createElement("h4");
//     seller_no.innerText = `Number - ${el.seller_no}`;
//     seller_no.setAttribute("class", "h_seller_no");

//     const btn = document.createElement("button");
//     btn.innerText = "Make offer";
//     btn.setAttribute("class", "btn_h");
//     btn.addEventListener("click", () => {
//         makeOffer();
//     });
//     let makeOffer = () => {
//         alert("Onno page a cholo");
//     };

//     div.append(image);
//     box.append(div);
//     box1.append(price, btn);
//     box2.append(model, fuel, km);
//     box3.append(
//         carname,
//         fuelTank,
//         Overview_Km,
//         location_h,
//         accident,
//         color,
//         engine,
//         month,
//         reg,
//         finance,
//         tyre
//     );
//     box4.append(owner);
//     box5.append(loc);
//     box6.append(pos);
//     box7.append(seller_name, seller_no)
// };

let body=document.getElementById("h_body")
 let y=JSON.parse(localStorage.getItem("data"))




let x=localStorage.getItem("data_Status")
if(x){
    console.log("heelo");
    body.innerHTML=null
    let maindiv=document.createElement("div")
    maindiv.setAttribute("id","maindiv")
    let img=document.createElement("img")
    img.src=`https://statics.olx.in/external/base/img/no-publications.webp`
    let btn=document.createElement("button")
    btn.innerText="Start selling"
    btn.onclick=()=>{
        window.location.href="../post your req page/sellproduct.html"
    }

    maindiv.append(img,btn)
    body.append(maindiv)
}
else{
    let box = document.querySelector(".l_first");
    let box1 = document.querySelector(".r_first");
    let box2 = document.querySelector(".l_second");
    let box3 = document.querySelector(".h_discription");
    let box4 = document.querySelector(".div1_ho");
    let box5 = document.querySelector(".div2_ho");
    let box6 = document.querySelector(".div3_ho");
    let box7 = document.querySelector(".r_second");
     
    let image=document.createElement("img")
    image.src=y.img_url
    image.setAttribute("class", "h_img_1");
    box.append(image)

    const price = document.createElement("h1");
        price.innerText = `₹ ${y.price}`;
        price.setAttribute("class", "h_price");
        box1.append(price)

        const loc = document.createElement("h4");
            loc.innerText = y.state;
            loc.setAttribute("class", "owner_h");
            


            const pos = document.createElement("h4");
                pos.innerText = y.date;
                pos.setAttribute("class", "owner_h");
                box6.append(pos)

                const owner = document.createElement("h4");
    owner.innerText = y.owner;
    owner.setAttribute("class", "owner_h");
    box4.append(owner)
    

    const fuelTank = document.createElement("p");
    fuelTank.innerText = `Fuel Type - ${y.fuel_type}`;
    fuelTank.setAttribute("class", "overview_h");

    let des=document.createElement("p")
    des.innerText=` ${y.description}`
    des.setAttribute("class","overview_h")

    let km=document.createElement("p")
    km.innerText=`km driven :- ${y.km_driven} KM`
 km.setAttribute("class","overview_h")
        
    box3.append(loc,fuelTank,des,km)
  

 
}


let city;
let data_FormLs = JSON.parse(localStorage.getItem("mobile_arnab"));
console.log(data_FormLs);

let displayDomData = (el) => {
    let box = document.querySelector(".l_first");
    let box1 = document.querySelector(".r_first");
    let box2 = document.querySelector(".l_second");
    let box3 = document.querySelector(".h_discription");
    let box4 = document.querySelector(".div1_ho");
    let box5 = document.querySelector(".div2_ho");
    let box6 = document.querySelector(".div3_ho");
    let box7 = document.querySelector(".r_second");

    const div = document.createElement("div");
    div.setAttribute("class", "h_div");

    const image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "h_img_1");

    const price = document.createElement("h1");
    price.innerText = `₹ ${el.price}`;
    price.setAttribute("class", "h_price");

    const model = document.createElement("h1");
    model.innerText = el.model;
    // console.log(model);

    const description = document.createElement("h1");
    description.innerText = el.mobilename;
    console.log(description);

    // const fuel = document.createElement("p");
    // fuel.innerText = el.fuel;
    // fuel.setAttribute("class", "h_fuel");

    const km = document.createElement("p");
    km.innerText = `Ram - ${el.ram}`;
    km.setAttribute("class", "h_km");

    const carname = document.createElement("p");
    carname.innerText = `Model - ${el.model}`;
    carname.setAttribute("class", "overview_h");

    const fuelTank = document.createElement("p");
    fuelTank.innerText = `Display - ${el.display}`;
    fuelTank.setAttribute("class", "overview_h");

    const Overview_Km = document.createElement("p");
    Overview_Km.innerText = `Os - ${el.os}`;
    Overview_Km.setAttribute("class", "overview_h");

    const location_h = document.createElement("p");
    city = el.location
    location_h.innerText = `Location - ${el.location}`;
    location_h.setAttribute("class", "overview_h");

    const accident = document.createElement("p");
    accident.innerText = `Chipset - ${el.chipset}`;
    accident.setAttribute("class", "overview_h");

    const manufacured_year = document.createElement("p");
    manufacured_year.innerText = `Manufacured Year - ${el.member_since}`;
    manufacured_year.setAttribute("class", "overview_h");

    // const brand = document.createElement("p");
    // brand.innerText = `Brand - ${el.brand}`;
    // brand.setAttribute("class", "overview_h");

    // const month = document.createElement("p");
    // month.innerText = `Making Month - ${el.makeMonth}`;
    // month.setAttribute("class", "overview_h");

    const reg = document.createElement("p");
    reg.innerText = `Registration Place - ${el.location}`;
    reg.setAttribute("class", "overview_h");

    // const finance = document.createElement("p");
    // finance.innerText = `Finance - ${el.finance}`;
    // finance.setAttribute("class", "overview_h");

    const tyre = document.createElement("p");
    tyre.innerText = `Company Name - ${el.companyname}`;
    tyre.setAttribute("class", "overview_h");

    const owner = document.createElement("h4");
    owner.innerText = el.seller_name;
    owner.setAttribute("class", "owner_h");

    const loc = document.createElement("h4");
    loc.innerText = el.location;
    loc.setAttribute("class", "owner_h");

    // const pos = document.createElement("h4");
    // pos.innerText = el.seller_on_olx;
    // pos.setAttribute("class", "owner_h");

    const seller_name = document.createElement("h4");
    seller_name.innerText = `Name - ${el.seller_name}`;
    seller_name.setAttribute("class", "h_seller_name");

    const seller_no = document.createElement("h4");
    seller_no.innerText = `Number - ${el.seller_no}`;
    seller_no.setAttribute("class", "h_seller_no");

    const btn = document.createElement("button");
    btn.innerText = "Make offer";
    btn.setAttribute("class", "btn_h");
    btn.addEventListener("click", () => {
        makeOffer();
    });
    let makeOffer = () => {
        alert("Onno page a cholo");
    };

    div.append(image);
    box.append(div);
    box1.append(price, btn);
    box2.append(description);
    box3.append(
        carname,
        // fuelTank,
        Overview_Km,
        location_h,
        accident,
        manufacured_year,
        // brand,
        // month,
        reg,
        // finance,
        tyre
    );
    box4.append(owner);
    box5.append(loc);
    // box6.append(pos);
    box7.append(seller_name, seller_no)
};
displayDomData(data_FormLs);

// let img = document.querySelector("#imgslider");

//
let img = document.querySelector(".h_img_1");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");

let imgCount = 0;
let imgArr = [
    JSON.parse(localStorage.getItem("mobile_arnab")).image,
    JSON.parse(localStorage.getItem("mobile_arnab")).img2,
    JSON.parse(localStorage.getItem("mobile_arnab")).img3,
    JSON.parse(localStorage.getItem("mobile_arnab")).img4,
];
console.log(imgArr);
btn0.addEventListener("click", function () {
    if (imgCount === 0) {
        imgCount = imgArr.length - 1;
    } else {
        imgCount--;
    }
    img.src = imgArr[imgCount];
});

btn1.addEventListener("click", function () {
    if (imgCount === imgArr.length - 1) {
        imgCount = 0;
    } else {
        imgCount++;
    }
    img.src = imgArr[imgCount];
});

//arnab's code for map functionality

let mapurl = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
let iframe = document.getElementById("gmap_canvas")
iframe.src = mapurl;


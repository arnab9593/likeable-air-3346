let city;
let data_FormLs = JSON.parse(localStorage.getItem("bikeHirak"));
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
  model.innerText = el.bikename;
  model.setAttribute("class","h1_h");
  console.log(model);

  const bikename = document.createElement("p");
  bikename.innerText = el.model;
  bikename.setAttribute("class", "h_fuel");

  const km_driven = document.createElement("p");
  km_driven.innerText = el.km_driven;
  km_driven.setAttribute("class", "h_km");

  const carname = document.createElement("p");
  carname.innerText = `Model - ${el.model}`;
  carname.setAttribute("class", "overview_h");

  const fuelTank = document.createElement("p");
  fuelTank.innerText = `Fuel - ${el.brand}`;
  fuelTank.setAttribute("class", "overview_h");

  const Overview_Km = document.createElement("p");
  Overview_Km.innerText = `Discription - ${el.description}`;
  Overview_Km.setAttribute("class", "overview_h");

  const location_h = document.createElement("p");
  city = el.location;
  location_h.innerText = `Location - ${el.location}`;
  location_h.setAttribute("class", "overview_h");

  const accident = document.createElement("p");
  accident.innerText = `Manufacured_year - ${el.manufacured_year}`;
  accident.setAttribute("class", "overview_h");

  const color = document.createElement("p");
  color.innerText = `Km driven - ${el.km_driven}`;
  color.setAttribute("class", "overview_h");

//   const engine = document.createElement("p");
//   engine.innerText = `Engine cc - ${el.engine}`;
//   engine.setAttribute("class", "overview_h");

//   const month = document.createElement("p");
//   month.innerText = `Making Month - ${el.makeMonth}`;
//   month.setAttribute("class", "overview_h");

//   const reg = document.createElement("p");
//   reg.innerText = `Registration Place - ${el.regPlace}`;
//   reg.setAttribute("class", "overview_h");

//   const finance = document.createElement("p");
//   finance.innerText = `Finance - ${el.finance}`;
//   finance.setAttribute("class", "overview_h");

//   const tyre = document.createElement("p");
//   tyre.innerText = `Tyre - ${el.tyre}`;
//   tyre.setAttribute("class", "overview_h");

  const owner = document.createElement("h4");
  owner.innerText = el.seller_name;
  owner.setAttribute("class", "owner_h");

  const loc = document.createElement("h4");
  loc.innerText = el.location;
  loc.setAttribute("class", "owner_h");

  const pos = document.createElement("h4");
  pos.innerText = el.seller_on_olx;
  pos.setAttribute("class", "owner_h");

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
  box2.append(model, bikename, km_driven);
  box3.append(
    carname,
    fuelTank,
    Overview_Km,
    location_h,
    accident,
    color,
    // engine,
    // month,
    // reg,
    // finance,
    // tyre
  );
  box4.append(owner);
  box5.append(loc);
  box6.append(pos);
  box7.append(seller_name, seller_no);
};
displayDomData(data_FormLs);

// let img = document.querySelector("#imgslider");

//
let img = document.querySelector(".h_img_1");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");

let imgCount = 0;
let imgArr = [
  JSON.parse(localStorage.getItem("bikeHirak")).image,
  JSON.parse(localStorage.getItem("bikeHirak")).img2,
  JSON.parse(localStorage.getItem("bikeHirak")).img3,
  JSON.parse(localStorage.getItem("bikeHirak")).img4,
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
let mapurl = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
let iframe = document.getElementById("gmap_canvas");
iframe.src = mapurl;

// Related Adds

let getData = async () => {
  let url = "https://sleepy-thicket-35635.herokuapp.com/api/bikes";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  displayData(data);
};
getData();

let displayData = (data) => {
  let box = document.getElementById("list_container_1");
  box.innerHTML = "";
  data.forEach((el) => {
    const div = document.createElement("div");
    div.setAttribute("class", "div_h_1");

    const image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "h_img_2");

    const price = document.createElement("h2");
    price.innerText = `₹ ${el.price}`;

    const brand = document.createElement("h3");
    brand.innerText = el.model;

    div.append(image, price, brand);
    box.append(div);
  });
};

document.querySelectorAll(".rightarrow").forEach((button, index) => {
  button.addEventListener("click", function () {
    let sliderbox1 = document.querySelector("#list_container_1");
    myslider(sliderbox1, "right", 40, 300, 40);
  });
});
document.querySelectorAll(".leftarrow").forEach((button, index) => {
  button.addEventListener("click", function () {
    let sliderbox1 = document.querySelector("#list_container_1");
    myslider(sliderbox1, "left", 40, 300, 40);
  });
});
let myslider = (sliderbox, direction, speed, distance, step) => {
  console.log("hi");
  let scrollAmount = 0;
  let slidetime = setInterval(() => {
    if (direction == "left") {
      sliderbox.scrollLeft -= step;
    } else {
      sliderbox.scrollLeft += step;
      console.log("w");
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slidetime);
    }
  }, speed);
};

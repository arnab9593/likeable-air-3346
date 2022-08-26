let getData = async () => {
    let url = "https://sleepy-thicket-35635.herokuapp.com/api/mobile";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayData(data);
  };
  getData();

  let displayData = (data) => {
    let box = document.getElementById("h_container");
    box.innerHTML = "";
    data.forEach((el) => {
      const div = document.createElement("div");
      div.setAttribute("class", "div_h");

      const image = document.createElement("img");
      image.src = el.image;
      image.setAttribute("class", "h_img");

      const price = document.createElement("h2");
      price.innerText = `₹ ${el.price}`;

      const ram = document.createElement("h4");
      //   km.innerText = el.km;
      ram.innerText = `Ram - ${el.ram}`;

      const brand = document.createElement("h3");
      brand.innerText = el.model;

      const location = document.createElement("p");
      location.innerText = el.location;

      div.append(image, price, ram, brand, location);
      div.addEventListener("click", () => {
        goToNextPage(el);
      });
      box.append(div);
    });
  };
  let goToNextPage = (el) => {
    localStorage.setItem("mobileHirak", JSON.stringify(el));
    window.location.href = "mobile.html";
  };
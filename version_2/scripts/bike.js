
let getData = async () => {
    let url = "https://sleepy-thicket-35635.herokuapp.com/api/bikes";
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

        const price = document.createElement("h3");
        price.innerText = `₹ ${el.price}`;

        const km = document.createElement("h5");
        //   km.innerText = el.km;
        km.innerText = `KM - ${el.km_driven}`;

        const brand = document.createElement("h4");
        brand.innerText = el.bikename;

        const location = document.createElement("p");
        location.innerText = el.location;

        div.append(image, price, km, brand, location);
        div.addEventListener("click", () => {
            goToNextPage(el);
        });
        box.append(div);
    });
};
let goToNextPage = (el) => {
    localStorage.setItem("bike_arnab", JSON.stringify(el));
    window.location.href = "bike.html";
};

let filter = async () => {
    let value = document.getElementById("location").value;
    if (value == "India") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes?location=${value}`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }

}
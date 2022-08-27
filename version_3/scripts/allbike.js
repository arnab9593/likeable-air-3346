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
    localStorage.setItem("bikeHirak", JSON.stringify(el));
    window.location.href = "bike.html";
};




let a_checkwithBrand = async () => {
    let bikename = document.getElementById("brnd_h").value;
    if (bikename == "Select Bike") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes?bikename=${bikename}`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }
}

let a_checkwithPrice_1l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price < 100000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_2l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 100000 && ele.price <= 200000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_3l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 200000 && ele.price <= 300000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_4l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 300000 && ele.price <= 500000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_5l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 500000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let filter = async () => {
    let value = document.getElementById("city_h").value;
    if (value == "India") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes`)
        let data = res = await res.json();
        console.log(data);
        displayData(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/bikes?location=${value}`)
        let data = res = await res.json();
        console.log(data);
        displayData(data)
    }

}
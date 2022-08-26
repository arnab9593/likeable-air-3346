let getData = async () => {
    let url = "https://sleepy-thicket-35635.herokuapp.com/api/mobile";
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
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
        //   price.innerText = el.price;
        price.innerText = `₹ ${el.price}`;

        const model = document.createElement("p");
        model.innerText = ` ${el.model}`;

        const location = document.createElement("p");
        location.innerText = el.location;

        div.append(image, price, model, location);
        div.addEventListener("click", () => {
            goToNextPage(el);
        });
        box.append(div);
    });
};
let goToNextPage = (el) => {
    localStorage.setItem("mobile_arnab", JSON.stringify(el));
    window.location.href = "mobile.html";
};


let a_checkwithBrand = async () => {
    let mobileName = document.getElementById("brnd_h").value;
    if (mobileName == "Select Mobile") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile?companyname=${mobileName}`)
        let data = res = await res.json();
        // console.log(data);
        displayData(data)
    }
}

let a_checkwithPrice_1l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price < 10000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_2l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 10000 && ele.price <= 20000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_3l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 20000 && ele.price <= 30000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_4l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 30000 && ele.price <= 50000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let a_checkwithPrice_5l = async () => {
    let arr = [];
    let url = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`);
    let x = await url.json()
    x.forEach(ele => {
        if (ele.price > 50000) {
            console.log((ele));
            arr.push(ele);
            displayData(arr)
        }
    })

}

let filter = async () => {
    let value = document.getElementById("city_h").value;
    if (value == "India") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile`)
        let data = res = await res.json();
        console.log(data);
        displayData(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/mobile?location=${value}`)
        let data = res = await res.json();
        console.log(data);
        displayData(data)
    }

}
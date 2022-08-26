let getData = async () => {
    let response = await fetch("https://sleepy-thicket-35635.herokuapp.com/api/random");
    let data = await response.json()
    console.log(data);
    displayDOM(data)
}
getData()

let displayDOM = (data) => {
    container = document.getElementById("a_main");
    container.innerHTML = ""
    data.forEach(ele => {
        let photo = document.createElement("img");
        photo.src = ele.image;
        photo.setAttribute("class", "a_mainPhoto")

        let amt = document.createElement("h4");
        amt.innerText = `₹ ${ele.price}`;
        amt.setAttribute("class", "a_amt")

        let model = document.createElement("p");
        model.innerText = ele.model;
        model.setAttribute("class", "a_model")

        let location = document.createElement("p");
        location.innerText = ele.location;
        location.setAttribute("class", "a_loc");

        let card = document.createElement("div");
        card.setAttribute("class", "a_card");
        card.addEventListener("click", () => {
            showinCarpage(ele);
        })

        card.append(photo, amt, model, location);
        container.append(card)
    });
}

let showinCarpage = (ele) => {
    // console.log(ele.category);
    if (ele.category == 'Car') {
        localStorage.setItem("carHirak", JSON.stringify(ele));
        window.location.href = "car.html";
    }

}

// let locF = document.getElementById("location").value;
// console.log(locF);

let filter = async () => {
    let value = document.getElementById("location").value;
    if (value == "India") {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/random`)
        let data = res = await res.json();
        // console.log(data);
        displayDOM(data)
    }
    else {
        let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/random?location=${value}`)
        let data = res = await res.json();
        // console.log(data);
        displayDOM(data)
    }

}


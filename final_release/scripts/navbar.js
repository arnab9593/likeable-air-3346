// console.log('inside it')

let loginLS = sessionStorage.getItem("userLoggedin");
console.log(loginLS);

if (loginLS) {
  document.querySelector(".dropdown").style.display = "block";
}
else {
  document.querySelector(".dropdown").style.display = "none";

}

let a_logout = () => {
  sessionStorage.clear()
  location.reload()
}

let numFromLS = localStorage.getItem("num");
console.log(numFromLS);
let x = document.getElementById("showName")
x.innerHTML = numFromLS

let myaddShow = () => {
  window.location.href = "google.com"
}

let main = async () => {
  console.log("im using ");
  let abc = document.querySelector("#psearch").value;
  if (abc) {
    document.querySelector("#containerp").style.display = "block";
  } else {
    document.querySelector("#containerp").style.display = "none";
  }
  let res = await fetch(
    `https://sleepy-thicket-35635.herokuapp.com/api/random`
  );
  res = await res.json();
  console.log(res);

  let ab = res.filter((el) => {
    return el.category == abc;
  });
  // append(ab);
  append2(ab);
};

// let append = (data) => {
//   document.querySelector("#containerp").innerHTML = null;
//   data.map((el) => {
//     let p = document.createElement("p");
//     p.setAttribute("class", "resultsp");
//     p.innerText = el.brand;

//     document.querySelector("#containerp").append(p);
//   });
// };


let append2=(data)=>{
  document.querySelector('#a_main').innerHTML=null
  data.map((ele)=>{
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
  })
}

let id;
let debounce = (func, delay) => {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
};

let againnone = () => {
  document.querySelector("#containerp").style.display = "none";
};
document.querySelector("body").addEventListener("click", againnone);

let count = 0;
let displayall = () => {
  if (count == 0) {
    document.querySelector("#alldataparent").style.display = "block";
    count = 1;
  } else {
    document.querySelector("#alldataparent").style.display = "none";
    count = 0;
  }
};
document.querySelector("#downarrowp").addEventListener("click", displayall);

document.querySelector("#fbicon").addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/olxindia/";
});
document.querySelector("#instaicon").addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/olx_india/";
});
document.querySelector("#twittericon").addEventListener("click", () => {
  window.location.href = "https://twitter.com/OLX_India";
});
document.querySelector("#yticon").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/user/OLXInTv";
});
document.querySelector("#pplaystore").addEventListener("click", () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.olx.southasia";
});
document.querySelector("#papplestore").addEventListener("click", () => {
  window.location.href =
    "https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792";
});

let toseller=()=>{

  if(loginLS){
    window.location.href="../my add section/myadd.html"
  }
  else{
    alert("login first")
    window.location.href="./login_signup/login.html"
  }
}
let img = document.querySelector("#simg");


let imgNum = 0;
let imgArr = [
    "https://i.ibb.co/VC7mz90/Screenshot-270.png",
    "https://i.ibb.co/TH0fVhB/Whats-App-Image-2022-08-24-at-8-34-16-PM.jpg",
    "https://i.ibb.co/XVPt7Gw/Screenshot-271.png",

]


document.querySelector("#pre_btn").addEventListener("click", function () {
    if (imgNum === 0) {
        imgNum = imgArr.length - 1;
    } else {
        imgNum--;
    }
    img.src = imgArr[imgNum];

})

document.querySelector("#next_btn").addEventListener("click", function () {
    if (imgNum === imgArr.length - 1) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    img.src = imgArr[imgNum];

})
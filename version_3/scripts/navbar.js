let main = async () => {
    console.log('im using ')
    let abc = document.querySelector('#psearch').value;
    if (abc) {
        document.querySelector('#containerp').style.display = 'block';
    } else {
        document.querySelector('#containerp').style.display = 'none';
    }
    let res = await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/random`)
    res = await res.json()
    console.log(res)

    let ab = res.filter((el) => {
        return el.category == abc;
    })
    append(ab)
}

let append = (data) => {
    document.querySelector('#containerp').innerHTML = null;
    data.map((el) => {
        let p = document.createElement('p')
        p.innerText = el.model

        document.querySelector('#containerp').append(p)
    })
}

let id;
let debounce = (func, delay) => {
    if (id) {
        clearInterval(id)
    }
    id = setTimeout(() => {
        func()
    }, delay);
}

let againnone = () => {
    document.querySelector('#containerp').style.display = 'none';
}
document.querySelector('body').addEventListener('click', againnone)

let count = 0
let displayall = () => {

    if (count == 0) {
        document.querySelector('#alldataparent').style.display = 'block';
        count = 1
    } else {
        document.querySelector('#alldataparent').style.display = 'none';
        count = 0
    }
}
document.querySelector('#downarrowp').addEventListener('click', displayall)

document.querySelector('#fbicon').addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/olxindia/'
})
document.querySelector('#instaicon').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/olx_india/'
})
document.querySelector('#twittericon').addEventListener('click', () => {
    window.location.href = 'https://twitter.com/OLX_India'
})
document.querySelector('#yticon').addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/user/OLXInTv'
})
document.querySelector('#pplaystore').addEventListener('click', () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.olx.southasia'
})
document.querySelector('#papplestore').addEventListener('click', () => {
    window.location.href = 'https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792'
})

//arnab code
let filterLocation = async () => {
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
// console.log('inside it')

let main=async()=>{
    console.log('im using ')
    let abc=document.querySelector('#psearch').value;
    let res=await fetch(`https://sleepy-thicket-35635.herokuapp.com/api/random`)
    res=await res.json()
    console.log(res)

    let ab=res.filter((el)=>{
        return el.category==abc;
    })
    append(ab)
}

let append=(data)=>{
    document.querySelector('#containerp').innerHTML=null;
    data.map((el)=>{
        let p=document.createElement('p')
        p.innerText=el.model

        document.querySelector('#containerp').append(p)
    })
}

let id;
let debounce=(func,delay)=>{
    if(id){
        clearInterval(id)
    }
    id=setTimeout(() => {
        func()
    }, delay);
}

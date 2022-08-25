let count=0

let clicking=()=>{
    count++;
    // console.log('hi hello')
    if(count%2!=0){
        document.querySelector('#datadisplayp').style.display='block';
    }else{
        document.querySelector('#datadisplayp').style.display='none';
    }
}


document.querySelector('#pallcategory').addEventListener('click',clicking)

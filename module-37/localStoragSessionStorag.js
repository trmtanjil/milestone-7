 const submitInfo=()=>{
    const number = document.getElementById('name').value;
    const emial = document.getElementById('email').value;
 
    localStorage.setItem(number,emial)

    const data = {number,emial}

    localStorage.setItem('id',JSON.stringify(data))
}
const clearstorag=()=>{
    localStorage.clear();
}

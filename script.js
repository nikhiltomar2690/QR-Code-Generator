const wrapper = document.querySelector('.wrapper'),
qrinput = wrapper.querySelector('input'),
qrimg = wrapper.querySelector('.qr-code img'),
genbtn = wrapper.querySelector('.button');

genbtn.addEventListener('click',()=>{
    let qrval = qrinput.value;
   /*  console.log(qrval); just for checking that it reads value and outputs in console*/
    if(!qrval){
        return;
    }
    genbtn.innerText="Generating QR Code..."
    // getting a qr code of user entered value using qr server
    //api & passing the api returned img src to qrimg

    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrval}`;
    qrimg.addEventListener('load', () =>{ //after qr code loads
        wrapper.classList.add("active");
        genbtn.innerText= "Generate";
    });
    
});

qrinput.addEventListener('keyup',()=>{
    if(!qrinput.value){
        wrapper.classList.remove("active");
    }
})
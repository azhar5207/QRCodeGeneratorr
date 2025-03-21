const qrinput = document.querySelector("#qr-input");
const qrimg = document.querySelector("#qr-img");
const qrbutton = document.querySelector("#qr-button");



qrbutton.addEventListener('click', () =>{

    const inputValue = qrinput.value;
    if(!inputValue){
        alert('please enter a valid url')
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    }
})

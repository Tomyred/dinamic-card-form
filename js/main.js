const card = document.querySelector('#card'),
    btnOpenForm = document.querySelector('#btn-open-form'),
    formCard = document.querySelector('#form-card'),
    cardNumber = document.querySelector('#card .number'),
    cardName = document.querySelector('#card .name'),
    cardCCV = document.querySelector('#card .ccv'),
    logo = document.querySelector('#logo'),
    signature = document.querySelector('.signature p'),
    month = document.querySelector('#date .date .month'),
    year = document.querySelector('#date .date .year');

    const showFront = () => {
        if(card.classList.contains('active')){
            card.classList.remove('active')
        }
    }

   


card.addEventListener('click', () => {
    card.classList.toggle('active')
});

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active');
    formCard.classList.toggle('active');
});

for (let i = 1; i <= 12; i++){
    let option = document.createElement('option')
    option.value = i;
    option.innerText = i;
    formCard.selectMonth.appendChild(option)
}

const Year = new Date().getFullYear();
for (let i = Year; i <= Year + 8; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    formCard.selectYear.appendChild(option)
}

//input de numero de tarjeta (inputNumber)

formCard.inputNumber.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    //Eliminar espaciado
    formCard.inputNumber.value = inputValue
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g,'')
    //Espaciado cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ').trim()
    // Cargar el valor del input en la tarjeta (card)
    cardNumber.textContent = inputValue;

    if(inputValue == ''){
        cardNumber.textContent = '#### #### #### ####';
        logo.innerHTML = '';
    }
    //Icono de empresa segun numero de tarjeta

    if (inputValue[0] == 4){
        logo.innerHTML = '';
        const image = document.createElement('img');
        image.src = 'img/logos/visa.png'
        logo.appendChild(image)
    }else if (inputValue[0] == 5){
        logo.innerHTML = '';
        const image = document.createElement('img');
        image.src = 'img/logos/mastercard.png'
        logo.appendChild(image)
    }
    showFront();
})
//input de nombre (inputName)
formCard.inputName.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    formCard.inputName.value = inputValue
    //Eliminar los numeros
    .replace(/([0-9])/g, '');
    // Cargar el valor del input en la tarjeta (card)
    cardName.textContent = inputValue;
    signature.textContent = inputValue
    if(inputValue == ''){
        cardName.textContent = "Esteban Quito";
        signature.textContent = "Esteban Quito";
    }
    showFront();
})
//input de ccv (inputCCV)
formCard.inputCCV.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    formCard.inputCCV.value = inputValue
    //Eliminar espaciado
    .replace(/\s/g, '')
    //Eliminar letras
    .replace(/\D/g, '')
    // Cargar el valor del input en la tarjeta (card)
    cardCCV.textContent = inputValue;
    card.classList.add('active')
})

// select de expire Date

formCard.selectMonth.addEventListener('change', (e) => {
    month.textContent = e.target.value;
    showFront();
})
formCard.selectYear.addEventListener('change', (e) => {
    year.textContent = e.target.value.slice(2);
    showFront();
})





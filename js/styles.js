let cardInput = document.querySelector('.card__input')
let firstFour = document.querySelector('.first__four')
let wrapper = document.querySelector('.card__img__box')
let uzCard = document.querySelector('.uzcard')
let masterCard = document.querySelector('.masterCard')
let visaCard = document.querySelector('.visa')
let humoCard = document.querySelector('.humo')
let cardName = document.querySelector('.card__heading')
let errorText = document.querySelector('.error_text')


cardInput.addEventListener('input', function(e){
    let cardInputValue = cardInput.value 
    
    function cardCaller(card,other,other_2,other_3){
        card.classList.remove('img_none')
        other.classList.add('img_none')
        other_2.classList.add('img_none')
        other_3.classList.add('img_none')
    }
    
    switch (cardInputValue.slice(0,4)){
        case '8600':
        firstFour.textContent = 8600
        cardCaller(uzCard,masterCard,visaCard,humoCard)
        break;
        
        case '9860':
        firstFour.textContent = 9860
        cardCaller(humoCard,uzCard,masterCard,visaCard)
        break;
        
        case '5300':
        firstFour.textContent = 5300
        cardCaller(masterCard,humoCard,visaCard,uzCard)
        break;
        
        case '4278':
        firstFour.textContent = 4278
        cardCaller(visaCard,humoCard,uzCard,masterCard)
        break;
        
        default:
        firstFour.textContent = 'xxxx'
    }
    
    switch(cardInputValue.slice(4,8)){
        case '1650':
        cardName.textContent = 'Kapital Bank'
        break;
        
        case '2742':
        cardName.textContent = 'NBU'
        break;
        
        case '3572':
        cardName.textContent = 'TBC'
        break;
        
        case '1660':
        cardName.textContent = 'OFC(Orient Finance Bank)'
        break;
        
        case '7532':
        cardName.textContent = 'SQB'
        break;
        
        case '1135':
        cardName.textContent = 'Xalq banki'
        break;
        
        default :
        cardName.textContent = 'Your Bank'
    }
    
    if(cardInputValue.length > 16){
        errorText.textContent = 'Karta raqami 16 ta raqamdan iborat bo`lishi kerak!'
    }else{
        errorText.textContent = ''
    }
})
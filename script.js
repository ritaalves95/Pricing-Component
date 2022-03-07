//VAR
const range = document.getElementById("range-price");
const discount = document.querySelector('.p-orange');
const discountInput = document.getElementById("billing");
const cardViews = document.querySelector('.card__views');
const cardPricing = document.querySelector('.card__pricing');
const cardRange = document.querySelector('.card__prince-range');
const price = document.getElementById("price");
const views = document.getElementById("views");

//RANGE VALUES
range.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+ range.value +'%, hsl(224, 65%, 95%) ' + range.value + '%, hsl(224, 65%, 95%) 100%)';

range.oninput = () =>{
    handleRange();
}

const handleRange = () =>{
    range.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+ range.value +'%, hsl(224, 65%, 95%) ' + range.value + '%, hsl(224, 65%, 95%) 100%)';
    
    if(range.value <= 20){
        views.innerText = '10K pageviews';
        price.innerText = discountInput.checked ? getDiscount(8) : '$8';
    }else if(range.value > 20 && range.value <= 40){
        views.innerText = '50K pageviews';
        price.innerText = discountInput.checked ? getDiscount(12) : '$12';

    }else if(range.value > 40 && range.value <= 60){
        views.innerText = '100K pageviews';
        price.innerText = discountInput.checked ? getDiscount(16) : '$16';

    }else if(range.value > 60 && range.value <= 80){
        views.innerText = '500K pageviews';
        price.innerText = discountInput.checked ? getDiscount(24) : '$24';

    }else if(range.value > 80 && range.value <= 100){
        views.innerText = '1M pageviews';
        price.innerText = discountInput.checked ? getDiscount(36) : '$36';

    }
}

//MONTLY DISCOUNT
discountInput.oninput = () => {
    const switchContainer = document.querySelector('.switch');
    const priceNum = Number(price.innerText.replace('$', ' ').trim());

    if(discountInput.checked){
        switchContainer.style.background = 'hsl(174, 77%, 80%)';

        const applyDiscount = priceNum - (priceNum * 0.25);
        price.innerText = `$${applyDiscount}`
    }else{
        switchContainer.style.background = 'hsl(223, 50%, 87%)';
        handleRange()
    }
}

const getDiscount = (value) => {
    const applyDiscount = value - (value * 0.25);

    return `$${applyDiscount}`
}

// Resize on smaller screens
const resize = () => {
    const screenWidth = window.screen.availWidth;

    if (screenWidth <= 375){
        discount.innerText = '25%';
        cardViews.insertBefore(cardRange, cardViews.children[1]);

    }else{
        discount.innerText = '25% discount';
    }
}
resize()

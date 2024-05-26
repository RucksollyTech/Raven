import './style.css'

let limit = document.querySelector('#limit');
let market = document.querySelector('#market');
let stop = document.querySelector('#stop');

let limit_over = document.querySelector('#limit__cover');
let amount_cover = document.querySelector('#limit__amount');
let type_cover = document.querySelector('#limit__type');
let trigger_cover = document.querySelector('#trigger__cover');

limit.addEventListener('click', () =>{
    limit.classList.toggle('active');
    market.classList.remove('active');
    stop.classList.remove('active');

    trigger_cover.classList.contains('d_none') ?"":
    trigger_cover.classList.add('d_none')

    limit_over.classList.remove('d_none')
    amount_cover.classList.remove('d_none')
    type_cover.classList.remove('d_none')
})
market.addEventListener('click', () =>{
    market.classList.toggle('active');
    limit.classList.remove('active');
    stop.classList.remove('active');

    amount_cover.classList.remove('d_none')

    trigger_cover.classList.contains('d_none') ? 
    "" :trigger_cover.classList.add('d_none')

    limit_over.classList.contains('d_none')?"":
    limit_over.classList.add('d_none')

    type_cover.classList.contains('d_none') ? "" :
    type_cover.classList.add('d_none')

})
stop.addEventListener('click', () =>{
    stop.classList.toggle('active');
    market.classList.remove('active');
    limit.classList.remove('active');

    trigger_cover.classList.remove('d_none')
    limit_over.classList.remove('d_none')
    amount_cover.classList.remove('d_none')
    type_cover.classList.remove('d_none')
})

let buy = document.querySelector('#buy__id');
let sell = document.querySelector('#sell_id');

buy.addEventListener('click',() => {
    buy.classList.toggle('active');
    sell.classList.remove('active');
});

sell.addEventListener('click',() => {
    sell.classList.toggle('active');
    buy.classList.remove('active');
});

let close = document.getElementById("close");
let breadcrumbs = document.getElementById("breadcrumbs");
let menu_button = document.getElementById("menu__button");

close.addEventListener('click', () => {
    breadcrumbs.classList.remove('display');
});
menu_button.addEventListener('click', () => {
    breadcrumbs.classList.add('display');
});























const forma=document.querySelector('#forma')



const input=document.querySelectorAll("input")
const inputDate=document.querySelector('input[type="date"]')


const btn = document.querySelector('#btn')

console.log(input)
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<input.length-1;i++){
        console.log(input[i].value)
    }
})



///функция работы с меню
const massPrice=[]
for(let i =0;i<3;i++){
    massPrice[i]=document.querySelector("#price"+i)
}
console.log(massPrice)

let pizza = "PIZZA QUATRO STAGIONI  . . . ."
let coffe = "coffee QUATRO STAGIONI  . . . ."
let chi = "chi QUATRO STAGIONI  . . . ."
let loh = "loh QUATRO STAGIONI  . . . ."

function addMenu(n,z="55,68 usd",x){
for(let i=0;i<8;i++){
    
    let inner = document.createElement('div');
    let title =document.createElement('p')
    let subtitle =document.createElement('p')
    let money =document.createElement('span')
    money.className="block-price__money"
    money.textContent=z
    title.className="block-price__title"
    subtitle.className="block-price__subtitle"
    inner.className="block-price__inner"
    title.textContent=x
    subtitle.textContent="Integer ullamcorper neque eu purus euismod"
    inner.append(title)
    title.append(money)
    inner.append(subtitle)
    
    massPrice[n].append(inner)
    
}
}

// addMenu(0,22,loh)
// addMenu(1,44,coffe)
// addMenu(2,55)
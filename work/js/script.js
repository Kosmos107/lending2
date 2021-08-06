

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
const btnMenu = document.querySelector("#btnMenu")
const newMenu = document.querySelector(".new-menu")

btnMenu.addEventListener("click",()=>{
   newMenu.classList.toggle("flex-menu")
})
const nameMenu =document.querySelector("#name-menu")
const priceMenu =document.querySelector("#price-menu")
const descriptionMenu =document.querySelector("#description-menu")
const numberMenu =document.querySelector("#number-menu")
const newMenuBtn = document.querySelector(".new-menu__btn")


const massPrice=[]
for(let i =0;i<3;i++){
    massPrice[i]=document.querySelector("#price"+i)
}
function addMenu(numberBlock=1,text,price,description,col=1){
    for(let i=0;i<col;i++){
        
        let inner = document.createElement('div');
        let title =document.createElement('p')
        let subtitle =document.createElement('p')
        let money =document.createElement('span')
        money.className="block-price__money"
        money.textContent=price+" USD"
        title.className="block-price__title"
        subtitle.className="block-price__subtitle"
        inner.className="block-price__inner"
        title.textContent=text+". . . ."
        subtitle.textContent=description
        inner.append(title)
        title.append(money)
        inner.append(subtitle)
        massPrice[numberBlock-1].append(inner)
        
    }
    }




newMenuBtn.addEventListener("click",()=>{
    let a = nameMenu.value
    let b = priceMenu.value
    let s =descriptionMenu.value
    let d = numberMenu.value
    console.log(d)
    if(priceMenu.value==0){
        alert("не указана цена")
    }
    if(nameMenu.value==0){
        alert("укажите укажите название блюда")
    }
    if(numberMenu.value>3){
        alert("нет столько колонок,укажите от 1 до 3")
    }else{
        addMenu(d,a,b,s)
    }
    
    
})

// addMenu(0,22,loh)
// addMenu(1,44,coffe)
// addMenu(2,55)
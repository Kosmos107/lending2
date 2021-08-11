////работа с формой

const forma=document.querySelector('#forma')
const input=document.querySelectorAll("input")
const inputDate=document.querySelector('input[type="date"]')
const btn = document.querySelector('#btn')





///функция работы с меню
const btnMenu = document.querySelector("#btnMenu")
const newMenu = document.querySelector(".new-menu")

let delMenu =document.querySelectorAll(".block-price__del")

const nameMenu =document.querySelector("#name-menu")
const priceMenu =document.querySelector("#price-menu")
const descriptionMenu =document.querySelector("#description-menu")
const numberMenu =document.querySelector("#number-menu")
const newMenuBtn = document.querySelector(".new-menu__btn")

const massPrice=[]
for(let i =0;i<3;i++){
    massPrice[i]=document.querySelector("#price"+i)
}


btnMenu.addEventListener("click",()=>{
    newMenu.classList.toggle("flex-menu")
 })

function cleaner(n){
        while(n.firstChild){
            n.removeChild(n.firstChild)
        }  
}

function peresovka(n){
    for(let i=0;i<n.length;i++){
        creatMenu(n[i])
    }  
}

function creatMenu(arr){
            
            let inner = document.createElement('div');
            let title =document.createElement('p')
            let subtitle =document.createElement('p')
            let money =document.createElement('span')
            let delet =document.createElement('div')
            delet.className="block-price__del"
            money.className="block-price__money"
            title.className="block-price__title"
            subtitle.className="block-price__subtitle"
            inner.className="block-price__inner"
            
            delet.textContent="x"
            money.textContent=arr.price+" USD"
            title.textContent=arr.name+". . . ."
            subtitle.textContent=arr.description
            inner.append(delet)
            inner.append(title)
            title.append(money)
            inner.append(subtitle)
            massPrice[arr.colum-1].append(inner)
            delet.id=arr.id

            delMenu =document.querySelectorAll(".block-price__del")
            del()

        }
        
        

    
       function del(){
        delMenu.forEach(btn=>{
            btn.addEventListener("click",(e)=>{
              
                let id= e.target.id
                deletMenu(id)
                massPrice.forEach(mass=>{
                    cleaner(mass)
                   })
                   peresovka(listenMenu)  
                })
              })
       }
       


newMenuBtn.addEventListener("click",()=>{
    if(priceMenu.value==0){
        alert("не указана цена")
    }
    if(nameMenu.value==0){
        alert("укажите укажите название блюда")
    }
    if(numberMenu.value>3){
        alert("нет столько колонок,укажите от 1 до 3")
    }else{
        addMenu(nameMenu.value,priceMenu.value,descriptionMenu.value,numberMenu.value)
        creatMenu(listenMenu[listenMenu.length-1])
       
    }
   
})



peresovka(listenMenu)




function createId(){
  return  Math.floor((Math.random()*100)*(Math.random()*100))
}
let listenMenu = [
    {
        id:createId(),
        name:"PIZZA QUATRO STAGIONI",
        price:"55,68 ",
        description:"Integer ullamcorper neque eu purus euismod",
        colum:1
    },
    {
        id:createId(),
        name:"PIZZA QUATRO STAGIONI",
        price:"55,68 ",
        description:"Integer ullamcorper neque eu purus euismod",
        colum:2
    },
    {
        id:createId(),
        name:"PIZZA QUATRO STAGIONI",
        price:"55,68 ",
        description:"Integer ullamcorper neque eu purus euismod",
        colum:3
    },
]

console.log(listenMenu)

function addMenu(name,price,description,colum){
    let block= {
        id:createId(),
        name:name,
        price:price,
        description:description,
        colum:colum,
    }
    listenMenu.push(block)
    
}

function deletMenu(element){
    for(let i = 0;i<listenMenu.length;i++){
        if(element==listenMenu[i].id){
            let z =listenMenu.indexOf(listenMenu[i])
            listenMenu.splice(z,1)
            console.log(listenMenu)
        }
        
        
    }
    
}


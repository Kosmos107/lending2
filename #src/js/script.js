

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
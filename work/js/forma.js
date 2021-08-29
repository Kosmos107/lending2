const formBody = document.querySelector(".formBody")
console.log(formBody)

document.addEventListener("DOMContentLoaded",()=>{
    const forma=document.querySelector('#forma')
    forma.addEventListener("submit",formSed)

    async function formSed(e){
        e.preventDefault();
    
        let error=formValid(forma)
        let formData = new FormData(forma)
        

        if(error=== 0){
           
            formBody.classList.add("_sending")
            
            // let response = await fetch ("sendmaill.php",{
            //     method:"POST",
            //     body:formData
            // })
            // if(response.ok){
            //     let result = await response.json();
            //     alert(result.message);
            //     forma.reset()
            //     formBody.classList.remove("_sending")
            // }else{
            //         alert("ошибка")
            //         formBody.classList.remove("_sending")
            // }
        }else{
            alert("форма заполнена не корректно")
        }
    
    }

 


    
function formValid(e){
    let error= 0
    let formReq = document.querySelectorAll("._req")

    for(let i = 0; i<formReq.length;i++){
        const input = formReq[i]
        formRemoveError(input)
        if(input.classList.contains("_email")){
            if(emailTest(input)){
                formAddError(input)
                error++;
            }
        }else{
            if(input.value===""){
                formAddError(input);
                error++;
            }
        }

    }

    return error;
}

function formAddError(input){
    input.classList.add("__error")
}

function formRemoveError(input){
    input.classList.remove("__error")
}

function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}


    

})

////работа с формой





const input=document.querySelectorAll("input")
const inputDate=document.querySelector('input[type="date"]')
const btn = document.querySelector('#btn')
btn.addEventListener("click",(e)=>{
    
})



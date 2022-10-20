const elSelect = document.querySelector(".js-select");
const elForm = document.querySelector(".js-form");
const elInputFirst = document.querySelector(".user-name");
const elRelationship = document.querySelector(".user-surname");
const elInputNumber = document.querySelector(".user-tel");
const elList = document.querySelector(".form-list-js");

const array = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    let check = false;
    
    const obj = {
        firstName: elInputFirst.value,
        lastName: elRelationship.value,
        phoneNumber: elInputNumber.value,
    };
    
    
    for (const arr of array) {
        if(arr.phoneNumber == elInputNumber.value){
            check = true;
            elInputNumber.classList.add("invalid-tel");
            elInputNumber.classList.remove("mb-3");
        }
    }
    
    if(!check){
        elInputNumber.classList.add("mb-3");
        elInputNumber.classList.remove("invalid-tel");
        
        array.push(obj);
        elForm.reset();
        elList.innerHTML = "";
        elList.classList.add("p-3");
        elList.classList.add("w-100");
        elList.classList.add("rounded");
        
        
        
        
        for(let i = 0; i < array.length; i++){
            const item = document.createElement("li");
            item.classList.add("fw-normal");
            item.classList.add("mb-4");        
            item.classList.add("text-center");  
            item.classList.add("site-item");        
            
            const fristTitle = document.createElement("h2");
            fristTitle.textContent = array[i].firstName;
            item.appendChild(fristTitle);
            fristTitle.classList.add("mb-2");
            fristTitle.classList.add("fw-bold");
            
            const secondTitle = document.createElement("p");
            secondTitle.textContent = array[i].lastName;
            item.appendChild(secondTitle);
            secondTitle.classList.add("mb-4");
            secondTitle.classList.add("fw-lighter");
            secondTitle.classList.add("fs-5");
            
            const telNumber = document.createElement("a");
            telNumber.textContent = array[i].phoneNumber;
            item.appendChild(telNumber);
            telNumber.href = `tel:${telNumber.textContent}`;
            telNumber.classList.add("d-block");
            telNumber.classList.add("mb-2");
            
            const elDelet = document.createElement("button");
            elDelet.textContent = "Delet";
            item.appendChild(elDelet);
            elDelet.classList.add("site-delet");
            elDelet.classList.add("d-block");
            elDelet.classList.add("btn");
            elDelet.classList.add("btn-danger");
            elDelet.classList.add("mx-auto");
            
            elDelet.addEventListener("click" , function(){
                item.classList.add("d-none");
                elList.classList.remove("p-3");
                array.length = 0;
            })
            elList.appendChild(item);
            
        }
    }
})


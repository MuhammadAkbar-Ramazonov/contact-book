const elHeroForm = document.querySelector(".js-hero-form");
const elName = elHeroForm.querySelector(".js-contact-name");
const elRelationship = elHeroForm.querySelector(".js-contact-relationship");
const elPhone = elHeroForm.querySelector(".js-contact-phone");
const elContactList = document.querySelector(".js-contact-list");

const contacts = []


elHeroForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const elNameValue = elName.value;    
    const elRelationshipValue = elRelationship.value;
    const elPhoneValue = elPhone.value;

    let haveNumber = false;

    const obj = {
        name: elNameValue,
        relationship: elRelationshipValue,
        phone: elPhoneValue.replaceAll(" ", ""),
    };

    for (const num of contacts) {
        if(num.phone == elPhoneValue){
            haveNumber = true;
            elPhone.classList.add("phone-ivalid");
        }
    }

    if(!haveNumber){
        elPhone.classList.remove("phone-ivalid");
        contacts.push(obj);
        elHeroForm.reset();
        elContactList.innerHTML = null;
    
        for (const contact of contacts) {
            const item = document.createElement("li");
            const itembox = document.createElement("div");
            const title = document.createElement("h3");
            const realation = document.createElement("p");
            const phonenumber = document.createElement("a");
            const delatebtn = document.createElement("button");

            item.classList.add("col-6");
            itembox.classList.add("rounded-3", "bg-info", "p-3");
            title.classList.add("text-white", "mb-3",);
            realation.classList.add("text-white", "mb-3",);
            phonenumber.classList.add("text-white","text-decoration-none");
            delatebtn.classList.add("btn", "btn-danger", "d-block", "mt-3")
    
            title.textContent = contact.name;
            realation.textContent = contact.relationship;
            phonenumber.href = `tel: +${contact.phone}`;
            phonenumber.textContent = `Phone Number: +${contact.phone}`;
            delatebtn.textContent = "Delate"
    
            itembox.appendChild(title);
            itembox.appendChild(realation);
            itembox.appendChild(phonenumber);
            itembox.appendChild(delatebtn);
    
            item.appendChild(itembox)
    
            elContactList.appendChild(item);
        }
    }

})
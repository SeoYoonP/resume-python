
let nameInput, contactInput, birthInput, emailInput
let names, contact, birth, email
let saveButton = document.querySelector(".cell-right")
saveButton.addEventListener("click", function(event){
    event.preventDefault()

    nameInput = document.querySelector(".nameIn").value
    contactInput = document.querySelector(".contactIn").value
    birthInput = document.querySelector(".birthIn").value
    emailInput = document.querySelector(".emailIn").value
     
    names = nameInput
    contact = contactInput
    birth = birthInput
    email = emailInput
    
    console.log(names)
    console.log(contact)
    console.log(birth)
    console.log(email)
})
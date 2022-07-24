
let firstname = document.getElementById('setfirstname')
let lastname = document.getElementById('setlastname')
let email = document.getElementById('setEmail')
let message = document.getElementById('setMessage')
let btn = document.getElementById('btn')
let review = document.getElementById('reviews')

btn.addEventListener('click',handleReviews)

review.addEventListener('click', removeBtn)

function handleReviews(){
    if(firstname.value.trim() !== '' && lastname.value.trim() !== '' 
    && email.value.trim() !=='' && message.value.trim() !==''){
    review.innerHTML += `<div class="card">
    <p>First Name: ${firstname.value}</p>
    <p>Last Name: ${lastname.value}</p>
    <p>E-mail Address: ${email.value} </p>
    <p>Comment:${message.value}</p>
    <button class="delete">X</button>
    </div>`

    firstname.value = ''
    lastname.value = ''
    email.value = ''
    message.value = ''
    e.preventDefault()
   
    }else{
        alert("enter your details")
    }
}

function removeBtn(event){
    let target = event.target
    if(target.classList.contains('delete')){
        target.parentElement.remove()
    }
}

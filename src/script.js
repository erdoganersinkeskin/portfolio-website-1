
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


function say(message) {
    console.log(message);
}


say("Hi!")


// for (let index = 0; index < items. length; index++) {
//     const element = items[ index];    
// }


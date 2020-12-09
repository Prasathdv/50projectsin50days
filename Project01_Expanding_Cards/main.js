// This module changes or toggles 'active' classes based on the background image slection

// Get the panels DOM into a variable
const panels = document.querySelectorAll('.panel')

// Loop through each panel (there are 5 image panel) and look for an click event and if any panel selected add active class
panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

// To remove the existing active class
function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
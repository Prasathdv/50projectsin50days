// Get the nodelist of box classes using querySelectorAll
const boxes = document.querySelectorAll('.box')
// Trigger this event when user scrolls
window.addEventListener('scroll', checkBoxes)
// call the checkBoxes function. This will display intial boxes
checkBoxes()

function checkBoxes() {
    // window.innerHeight returns total viewport height of the current screen. 
    // Instead of directly taking viewport height we are here manipulating the 
    // value by dividing by value 5 and multiply it by value 4. 
    // This will give somewhat reduced screen height.
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom);

    boxes.forEach(box => {
        // getBoundingClientRect() function returns the rectangles all values including top, bottom, left, right, height, width
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop);
        if (boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
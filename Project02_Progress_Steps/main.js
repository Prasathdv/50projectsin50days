// This module works on enabling progress bar and enabling/disabling prev/next buttons
// This module uses functionality to change css properties using style function
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// Initialize Counter variable
let currentActive = 1

// Next button event handling. 
//  1. Increment counter variable by one. for this use unary increment operator ++.
//  2. Check if the counter is greater than circle array length (Here it is 4). If so make the counter equals 4. Should not increment beyond array length.
//  3. Call function updateCircle()
next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    updateCircle()
})

// Prev button event handling.
//  1. Decrement counter variable by one. for this use unary increment operator --.
//  2. Check if the counter is lesser than 1. If so make the counter equals 1. Should not decrement beyond 1.
//  3. Call function updateCircle()
prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    updateCircle()
})

// Function call for updateCircle()
//  1. Loop through circles nodeList array and check if current array index is lesser than counter value
//      a. if lesser than add a class active
//      b. if not remove the class active
//  2. Get the nodeList of active classes
//  3. Need to calculate progress width % using actives nodeList length and circles nodeList length
//      a. first divide actives.length with circles.length and multiply it with 100 to get %
//      b. Then concatenate with % symbol to get actual width
//  4. Now we need to disable/enable prev/next buttons based on currentActive(counter) value
//      a. If counter equals 1 then disable prev button
//      b. If counter reaches the array length then disable next button
//      c. If other cases then enable both buttons 
function updateCircle(){
    
    circles.forEach((circle, index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // handle the css styles using style property. 
    progress.style.width = ((actives.length -1)/(circles.length -1)) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}
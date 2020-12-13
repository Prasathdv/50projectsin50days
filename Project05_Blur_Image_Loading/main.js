// Import the required classes

const bg = document.querySelector('.bg')
const loadingTxt = document.querySelector('.loading')

// Call the function every 30milliseconds time interval using setInterval method
let timer = setInterval(bgLoader, 30)

// define a function to blur text and background image while incrementing timer
let load = 0
function bgLoader() {
    load++
    if (load > 99) {
        clearInterval(timer)
    }
    // Below two lines is for counter number styling
    // This will display the incrementing number in the div loading text
    loadingTxt.innerText = `${load}%`
    // This will decrease the opacity of the number as number increases. This is to highlight the bg picture which is fading in
    loadingTxt.style.opacity = scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// This function is a copycat from stackoverflow site. This function mainly maps the range of one set (1-100) with other different number range(0,1)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

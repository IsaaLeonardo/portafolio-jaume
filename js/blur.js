const $button = document.getElementById('header-button')
const $header = document.getElementById('header')
const $point = document.getElementById('point')

const observerForButton = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.target.id == 'main') {
            $button.classList.toggle('is-unseen')
        }
    })
}, options)

$sections.forEach(section => {
    observerForButton.observe(section)
})

const observerForBlur = new IntersectionObserver(function(entries) {
    entries.forEach((entry,index) => {
        $header.classList.toggle('is-blur')
    })
}, options)

observerForBlur.observe($point)
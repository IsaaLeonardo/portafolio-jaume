const $button = document.getElementById('header-button')
const $header = document.getElementById('header')

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

window.onscroll = function() {
    $header.classList.add('is-blur')
}

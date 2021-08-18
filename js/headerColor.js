const links = [
    document.getElementById('link-main'),
    document.getElementById('link-projects'),
    document.getElementById('link-contact')
]

const sections = [
    document.getElementById('main'),
    document.getElementById('projects'),
    document.getElementById('contact')
]

const options = {
    root: null,
    threshold: 0,
    rootMargin: ""
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return 
        }
        changeMenuNameColor(entry.target)
    })
}, options)

sections.forEach(section => {
    observer.observe(section)
})

function changeMenuNameColor(section) {
links.forEach(link => link.classList.remove("is-active"))
links.forEach(link => {
    let lastLetterOfLink = link.id[link.id.length - 1]
    let lastLetterOfSection = section.id[section.id.length - 1]
    if (lastLetterOfLink == lastLetterOfSection) {
    link.classList.add("is-active")
    }
})
}
const $form = document.querySelector('#contact')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
        'Accept': 'application/json'
    }
    })
    if(response.ok) {
    this.reset()
    alert('Gracias por contactarme!')
    }
}

const $formInputs = document.querySelectorAll('.form-input')
const $inputs = document.querySelectorAll('input')

$inputs.forEach((input, index) => {
    if(input.required) {
        $formInputs[index].classList.add('is-required')
    }
})
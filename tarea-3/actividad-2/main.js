const $ = element => document.querySelector(element)

const $print = $('#print')
$print.addEventListener('click', () => window.print())

const $open = $('#open')
$open.addEventListener('click', () => window.open('https://www.google.com', '_blank', 'width=400,height=400'))

const $alert = $('#alert')
$alert.addEventListener('click', () => window.alert('Método alert'))

const $prompt = $('#prompt')
const $promptResult = $('#prompt-result')
$prompt.addEventListener('click', () => {
  const input = window.prompt('Método prompt')
  $promptResult.textContent = input
})

const $confirm = $('#confirm')
const $confirmResult = $('#confirm-result')
$confirm.addEventListener('click', () => {
  const input = window.confirm('Método confirm')
  $confirmResult.textContent = input
})

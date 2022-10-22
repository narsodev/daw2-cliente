const $ = element => document.querySelector(element)

const $button = $('button')
$button.addEventListener('click', () => {
  const navigate = window.confirm('¿Desea navegar a ITEC?')
  if (navigate) window.location.href = 'https://www.itecfp.com/'
  else window.alert('¡Tú te lo pierdes!')
})

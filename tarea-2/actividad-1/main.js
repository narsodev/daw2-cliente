let number
let error

do {
  number = Number(window.prompt('Introduzca su edad:'))
  error = Number.isNaN(number) || number < 0 || number > 120
  if (error) window.alert('Edad no válida.')
} while (error)

if (number >= 18) window.alert('Ya puedes conducir.')
else window.alert('Aún no puedes conducir.')

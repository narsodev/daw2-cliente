let mark
let error

do {
  mark = Number(window.prompt('Introduzca su nota:'))
  error = Number.isNaN(mark) || mark < 0 || mark > 10
  if (error) window.alert('Nota no válida.')
} while (error)

if (mark < 5) window.alert('Suspenso.')
else if (mark === 5) window.alert('Suficiente.')
else if (mark === 6) window.alert('Bien.')
else if (mark === 7) window.alert('Notable.')
else if (mark === 8) window.alert('Notable alto.')
else if (mark === 9) window.alert('Sobresaliente.')
else if (mark === 10) window.alert('Sobresaliente alto.')

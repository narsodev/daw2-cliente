const dateElement = document.querySelector('#date')

const stringDateNow = () => {
  const date = new Date()

  const stringDate = date.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })

  return stringDate
}

const updateDate = date => {
  dateElement.textContent = `Fecha: ${date}`
}

updateDate(stringDateNow())

setInterval(() => updateDate(stringDateNow()), 1000)

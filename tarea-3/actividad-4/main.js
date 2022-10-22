const IGNORED_TYPES = ['function', 'object']

const $ = element => document.querySelector(element)

const $properties = $('#properties')
const list = document.createElement('ul')

const allProperties = Object.keys(Object.getPrototypeOf(navigator))

const properties = allProperties
  .filter(property =>
    !IGNORED_TYPES.includes(typeof navigator[property]) &&
    navigator[property])

properties.forEach(property => {
  const value = navigator[property]

  const item = document.createElement('li')
  item.textContent = `${property}: ${value}`

  list.appendChild(item)
})

$properties.appendChild(list)

function getSync() {
  const value = localStorage.getItem('value')
  if (value != null) {
    return { value }
  }
  return { error: true }
}

async function getAsync() {
  try {
    const value = await fetch('/api/value')
    return { value }
  } catch (err) {
    return { error: true }
  }
}

function draw(value) {
  const elements = document.getElementsByClassName('item')
  elements.forEach(element => {
    element.innerText = value.toString()
  })
}

async function main() {
  const res1 = getSync()

  if (res1.error) {
    draw('Error :(')
    return
  }

  const res2 = await getAsync()

  if (res2.error) {
    draw('Error :(')
    return
  }

  draw(res1.value + res2.value)
}

main()

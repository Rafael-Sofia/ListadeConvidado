const teste = localStorage.getItem('person')
console.log(teste)

const person = []
localStorage.setItem('person',JSON.stringify(person))


const storage = () => {
  const personLocalStorage = localStorage.getItem('person')
  console.log(personLocalStorage)
}

const handleAddPerson = () => {

  const personLocalStorage = localStorage.getItem('person')

  const person = JSON.parse(personLocalStorage);

  const id = person.length;
  const name = document.querySelector('#name').value
  person.push({
    id,
    name
  })
  
  localStorage.setItem('person',JSON.stringify(person))
  
  storage()
}




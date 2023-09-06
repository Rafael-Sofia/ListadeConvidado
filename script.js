// const table = document.getElementById('.list-tasks')
const table = document.querySelector('#list-tasks tbody[id="tbody"]')
const input = document.querySelector('#name')
let list = []

const storage = () => {
  let newTable = ''

  list.map(({name}) => {

  newTable =
  newTable +
  `
    <tr>
      <td>
        ${name}
      </td>
      <td>
        <button>excluir</button>
      </td>
    </tr>
    
  `
  })
  
table.innerHTML = newTable

}

const handleAddPerson = () => {

  id = list.length;
  
  list.push({
    id,
    name:  input.value 
  })

  localStorage.setItem('person',JSON.stringify(list))

  input.value = ''

  storage()
}

const listTable = () => {
  const personLocalStorage = localStorage.getItem('person')

  if (personLocalStorage) {
    list = JSON.parse(personLocalStorage)
  } 

  storage()
}

listTable()




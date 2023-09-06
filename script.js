const localStorageKey = '@person'
const table = document.querySelector('#list-tasks tbody[id="tbody"]')
const input = document.querySelector('#name')

function handleAddPerson()
{
    // increment to localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

    values.push({
      id: values.length,  
      name: input.value
    })
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showTbody()

    input.value = ''
}

function showTbody()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    
    console.log(values);
    table.innerHTML = ''

    values.forEach(({id, name}) => {
      table.innerHTML += `
      <tr>
        <td>
          ${name}
        </td>
        <td>
          <button onclick="handleRemovePerson(${id}, '${name}')" >excluir</button>
        </td>
      </tr>
      `
    })
}

function handleRemovePerson(id, name)
{
    console.log(id)
    console.log(name)

    const isConfirmed = (confirm(`Realmente deseja remover o ${name}`))

    if(isConfirmed) {
      let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
      let index = values.findIndex(x => x.id == id)
      values.splice(index,1)
      localStorage.setItem(localStorageKey,JSON.stringify(values))
      showTbody()
    }
   
}

showTbody()
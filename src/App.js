// src/App.js
import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json"

function App() {
  let fiveContacts = contactsArray.slice(1, 5)
  const [contactsList, setContacts] = useState(fiveContacts)

  function randomContact(){
    let randomNumber = Math.floor(Math.random() * contactsArray.length)
    const randomContact = contactsArray[randomNumber]

    setContacts(contactsList =>[...contactsList, randomContact]);
  }

  function sortByName(){
   const sortedByName = contactsList.slice().sort((a,b)=>{
      if(a.name > b.name) return 1
      else if (a.name < b.name) return -1
      else return 0
    })
    setContacts(sortedByName)
    }

    function sortByPopularity(){
      const sortedByPop = contactsList.slice().sort((a,b)=>{return a.popularity - b.popularity})   
      setContacts(sortedByPop)    
    }

    function deleteCelebById(id){
      /** This filter copies all movies that are not being delete */
      setContacts(contactsList.filter(celeb => celeb.id !== id))
  }

  return (
  <div className="App">
      <h1>Iron contacts</h1>
      <button onClick={randomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by poularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th> Oscar</th>
            <th> Emmy</th>
          </tr>
      {contactsList.map((contact)=>(
        <tr key={contact.id}>
            <td><img src={contact.pictureUrl} width="60" height="80"/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            
            <td>{contact.wonOscar ? <p>🏆</p> : <p>X</p>} </td>
            <td>{contact.wonEmmy ? <p>🏆</p> : <p>X</p>}</td>
            <td><button onClick={()=>deleteCelebById(contact.id)}>Delete</button></td>
            
        </tr>
      ))}
        </table>

  </div>);
}
export default App;
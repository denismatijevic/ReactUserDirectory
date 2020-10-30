import React,{useState} from "react";
import User from "../components/User/User";

const Main = () => {
  const[currentUsers, setCurrentUsers] = useState()
  const[formText, setFormText] = useState()
  const[filteredUsers, setFilteredUsers] = useState()

  const getData = () => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res=>res.json())
      .then(res=>{
        console.log(res.results)
        setCurrentUsers(res.results)
      })
  }
  const sortByAge = () => {
      const sorting = [...currentUsers]
      sorting.sort((a,b) => {
      const ageA = a.dob.date 
      const ageANum = parseInt(ageA.substring(0, 4) + ageA.substring(5,7) + ageA.substring(8,10))
      const ageB = b.dob.date 
      const ageBNum = parseInt(ageB.substring(0, 4) + ageB.substring(5,7) + ageB.substring(8,10))
      return ageANum - ageBNum
    })
    setCurrentUsers(sorting)
    console.log(sortByAge)
  }
  
  const handleChange = event => {
    const {name, value} = event.target
    console.log(value)
    setFormText({
      // ...formText,
      [name]: value
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    const filteredUsersArray = currentUsers.filter(user => {
      return (user.name.first.toLowerCase()===formText.name.toLowerCase() ||
      user.name.last.toLowerCase()===formText.name.toLowerCase())
    })
    setFilteredUsers(filteredUsersArray)
  }
  return( 
    // "use effect look it up and use it"
    <div>
      {!currentUsers && getData()}
      <h1>Employee Data</h1>
      <button className="inline-it" onClick={()=>setFilteredUsers()}>Show All</button>
      <button className="inline-it" onClick={sortByAge}>Sort By Age</button>
      <form className="inline-it" onSubmit={handleFormSubmit}>
      <input name="name" type="name" id="name" onChange={handleChange}></input>
      <button type="submit">Submit</button>
      </form>
      {filteredUsers
        ?filteredUsers.map((person, index)=> (
          <div key={person.dob.date}>
          <User person={person} />
          </div>
        ))
        :currentUsers
        && currentUsers.map((person, index)=>(
          <div key={person.dob.date}>
          <User person={person} />
          </div>
        ))
      }
    </div>
  )
}

export default Main;
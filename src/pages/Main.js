import React,{useState} from "react";
import User from "../components/User/User";

const Main = () => {
  const[currentUsers, setCurrentUsers] = useState()
  // const[sortedUsers, sortCurrentUsers] = useState()

  const getData = () => {
    fetch('https://randomuser.me/api/?results=10')
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
  // getData()
  return(
    // "use effect look it up and use it"
    <div>
      <button onClick={getData}>Show all employees</button>
      <button onClick={sortByAge}>Sort by age</button>
      {(currentUsers) 
        ? currentUsers.map((person, index)=>(
          <div key={person.dob.date}>
          <User person={person} />
          </div>
          // <div key={index}>
          //   {/* <div style={{ border:"2px solid black" }}>
          //     <img src={person.picture.medium} />
          //     <span> {person.name.title+" "+person.name.first+" "+person.name.last}</span>
          //     <span> {new Date (person.dob.date).toLocaleDateString()+" "+person.dob.age}</span>
          //     <span> {person.email}</span>
          //     <span> {person.phone}</span>
          //     <span> {person.location.city+", "+person.location.country}</span>
          //   </div>
          // </div> */}
        ))
        : <h1>Populate data</h1>
      }
    </div>
  )
}

export default Main;
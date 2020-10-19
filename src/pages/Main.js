import React,{useState} from "react";

const Main = () => {
  const[currentUsers, setCurrentUsers] = useState()
  function getData(){

    fetch('https://randomuser.me/api/?results=500')
      .then(res=>res.json())
      .then(res=>{
        console.log(res.results)
        setCurrentUsers(res.results)
      })
  }

  return(
    
    <div>
      <button onClick={getData}>Show all employees</button>
      {(currentUsers) 
        ? currentUsers.map((person, index)=>(
          <div key={index}>
            <h1>{person.name.title+" "+person.name.first+" "+person.name.last}</h1>
          </div>
        ))
        : <h1>Populate data</h1>
      }
    </div>
  )
}

export default Main;
import React, { useState,useEffect } from "react";
import './App.css'
import ContactCard  from "./ContactCard";
const App = () =>{

  const [results, setResults] = useState([]);

 useEffect( () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {setResults(data.results)
    });
 },[])
 
  return(
    // if we want class to our html then we need to use className
    <div>
      {results.map((result,index) => {
        return(
          <ContactCard key={index}
            avatarURL =  {result.picture.large}
            name = {result.name.first}
            email = {result.email}
            age = {result.dob.age} >
          </ContactCard>
        )
      } )}
    </div>
  )

}

export default App;
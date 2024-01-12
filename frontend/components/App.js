import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useState,useEffect } from 'react'
import { useActionData } from 'react-router-dom'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [char,setChar] = useState([])
  const [planets,setPlanets] = useState([])
 useEffect(() => {
  function fetchData(){
    const data1 = axios.get(urlPlanets)
    const data2 = axios.get(urlPeople)
    return Promise.all([data1,data2])
    .then(res =>{ 
      const planets = res[0].data
      const people = res[1].data
      setChar(people)
      setPlanets(planets)
    })
    .catch(err => console.log(err.message))
    } 
    fetchData()
    
  },[])
  if(!char) return "Fetching Star Wars Characters..."

  
  
 
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
       char.map( ch =>{
        return  <Character 
         key={ch.id} 
         name={ch}
         planetName={planets}
        />  })     
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

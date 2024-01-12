import React,{useEffect, useState} from 'react'

function Character({name,planetName}) { // ❗ Add the props 

  const [showPlanet,setShowPlanet]=useState(false)
  const matchID = planetName.find(pl => pl.id == name.homeworld).name
  
  const toggle = () =>{
    setShowPlanet(!showPlanet)
   }
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'  onClick={toggle}>
      <h3 className='character-name'>{name.name}</h3>
      {showPlanet &&(
        <p>Planet:
        <span className='character-planet'> {matchID}</span>
      </p>
        )} 
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character

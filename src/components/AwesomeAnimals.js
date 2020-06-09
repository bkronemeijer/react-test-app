import React from 'react'

export default function AwesomeAnimals (props) {
 return (
   <ul>
    {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
      (animal, index) => {
        return <li>Awesomeness level {index + 1}: {animal}</li>;
      }
    )}
  </ul>)
}
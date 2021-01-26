import React from 'react'
import ActorCard from "./ActorCard"
import imageNotFound from "../../Images/NoImageFound.jpg"

const ActorGrid = ({data}) => (
        <div>
            {
               
                data.map(({person}) => <ActorCard key={person.id} 
                   name={person.name}
                   country={person.country ? person.country.name : null}
                   birthday ={person.birthday}
                   deatday={person.deathday}
                   gender = {person.gender}
                   image = {person.image ? person.image.medium : imageNotFound}
                />)
            }
        </div>
    )

export default ActorGrid

import React from 'react'
import ShowCard from './ShowCard'
import imageNotFound from "../../Images/NoImageFound.jpg"

// eslint-disable-next-line arrow-body-style
const ShowGrid = ( { data } ) => {
    return(
        <div>
            {data.map( ( { show })=> <ShowCard 
            key={show.id} 
            name={show.name} 
            image={show.image? show.image.medium : imageNotFound  } 
            summary = {show.summary}
            />  )
            }
        </div>
    )
}
export default ShowGrid

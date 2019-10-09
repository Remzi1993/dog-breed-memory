import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

export default function BreedDetails(props) {
    const images = props.images
    return(
        <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show images of a specific dog breed.

      <Link to="/">Go back to the index</Link>
      <div>
  { images && images.map((url, index) => <img key={index} src={ url } alt="Dog" />) }
  { !images && 'Loading...' }
</div>
    </div>
    )
}


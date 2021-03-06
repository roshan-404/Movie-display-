import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function Movie( {title , poster_path, overview , vote_average} ) {

    const setVoteClass = (vote) => {
        if(vote>=7){
            return "green";
        }else if(vote>=5){
            return "orange"
        }else{
            return "red"
        }
    }

    return (
        <div className="movie-container">
            <div className='movie'>
            <img src={poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"} alt={title} />
            <div className="movie-info">
                <h3>{title }</h3>
                <span className={`tag ${setVoteClass(vote_average)}`} >{ vote_average }</span>
            </div>
            <div className="movie-hover">
                <h2>Overview: </h2>
                <p>{overview}</p>
            </div>
            </div>
        </div>
        
    )
}

export default Movie


import { useEffect, useState } from 'react'
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a682055d92179f832e6e64da02191d1e&page=1"

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=a682055d92179f832e6e64da02191d1e&query="

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovieList(FEATURED_API)
  },[])

  const getMovieList = (API) => {
    fetch(API)
      .then(res => res.json())
      .then( (data) => 
       {
        setMovies(data.results)
       }
      )
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      getMovieList(SEARCH_API+searchTerm)
      setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <form  onSubmit={handleOnSubmit} >
        <input 
            className='search' 
            type="search" 
            placeholder='Search...' 
            value={searchTerm} 
            onChange={handleOnChange} />
        </form>
      </header>
    <div className='movie-container'>
      { movies.map((movie) => <Movie key={movie.id} {... movie} />)}
    </div>
    </>
    
  )

}

export default App;

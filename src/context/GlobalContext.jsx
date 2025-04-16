import { createContext, useContext, useState, useEffect, use } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState()

    const movies_api_url = `http://localhost:3000/movies/`;
    const movie_api_url = `http://localhost:3000/movies/${movie}`


    function fetchMovies() {
        fetch(movies_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }


    function fetchMovie() {
        fetch(movie_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }

    return (
        <>
            <GlobalContext.Provider value={{ movies, fetchMovies, movie, setMovie, fetchMovie }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

function useMoviesContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useMoviesContext }
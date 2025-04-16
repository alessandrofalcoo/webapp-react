import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([])

    const movies_api_url = `http://localhost:3000/movies/`;


    useEffect(() => {
        fetch(movies_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })

    }, [])



    return (
        <>
            <GlobalContext.Provider value={{ movies }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

function useMoviesContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useMoviesContext }
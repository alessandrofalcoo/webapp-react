import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // Stato di default del caricamento

    const movies_api_url = `http://localhost:3000/movies/`;


    useEffect(() => {
        setLoading(true); // Il caricamento prima della fetch api è settato a true
        fetch(movies_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setLoading(false); // Il caricamento dopo la ricezione dei dati è false
            })
            .catch(err => {
                console.error("Errore durante il caricamento dei film:", err);
                setLoading(false) // Durante la gestione dell'errore il caricamento è settato a false
            })
    }, [])



    return (
        <>
            <GlobalContext.Provider value={{ movies, loading }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

function useMoviesContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useMoviesContext }
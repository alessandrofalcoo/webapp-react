import { useEffect, useState } from "react";
import Movie from './Movie'

export default function Home() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/movies/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            })

    }, [])


    return (
        <>
            <div className="container d-flex gap-3 my-4 flex-column">
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card-img-top" src={`http://localhost:3000/img/${movie.image}`} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.title}</h4>
                            <p className="card-text">{movie.abstract}</p>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}
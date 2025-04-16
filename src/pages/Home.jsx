import { useEffect, useState } from "react";

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
            {movies.map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card-img-top" src={movie.image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{movie.title}</h4>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                </div>

            ))}
        </>
    )
}
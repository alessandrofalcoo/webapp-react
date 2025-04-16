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
                <div class="card" key={movie.id}>
                    <img class="card-img-top" src="" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">{movie.title}</h4>
                        <p class="card-text">{movie.abstract}</p>
                    </div>
                </div>

            ))}
        </>
    )
}
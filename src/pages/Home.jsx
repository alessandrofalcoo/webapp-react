import { useMoviesContext } from "../context/GlobalContext";

export default function Home() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
            <div className="container d-flex flex-wrap justify-content-around gap-4 my-4 ">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div className="card" key={movie.id}>
                            <img className="card-img-top" src={`http://localhost:3000/img/${movie.image}`} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{movie.title}</h4>
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies available</p>
                )}

            </div>
        </>
    )
}
import { useMoviesContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import Main from "../components/Main";

export default function Home() {
    const { movies } = useMoviesContext()
    console.log(movies);

    return (
        <>
            <Main />
            <div className="container d-flex flex-wrap justify-content-center gap-4 my-4 ">

                {movies.length > 0 ? (
                    movies.map(movie => (
                        <Link to={`/${movie.id}/movie`} key={movie.id}>
                            <div className="card" >
                                <img className="card-img-top" src={`http://localhost:3000/img/${movie.image}`} alt="Title" />
                                <div className="card-body">
                                    <h4 className="card-title">{movie.title}</h4>
                                    <p className="card-text">{movie.abstract}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No movies available</p>
                )}

            </div>
        </>
    )



}
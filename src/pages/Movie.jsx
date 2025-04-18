import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Main from "../components/Main"
import Header from "../components/Header"
import Reviews from "../components/Reviews"


export default function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState('')

    const movie_api_url = `http://localhost:3000/movies/${id}`

    useEffect(() => {
        fetch(movie_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovie(data)
            })
    }, [])

    return (
        <>
            <Header />
            <Main />
            <div className="container">
                <div className="card-container d-flex justify-content-center">
                    <div className="card">
                        <img className="card-img-top" src={`http://localhost:3000/img/${movie.image}`} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.title}</h4>
                            <p className="card-text">{movie.abstract}</p>
                        </div>
                    </div>
                </div>
                <Reviews movieId={id} />
            </div>
        </>
    )
}
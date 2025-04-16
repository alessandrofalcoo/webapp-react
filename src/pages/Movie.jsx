import { useState } from "react"
import { useEffect } from "react"

export default function Movie() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        function fetchMovie() {
            fetch(`http://localhost/movies/${movie}`)
                .then(res => res.json())
                .then(data => {
                    setMovie(data)
                })

        }
    }, [])


    return (
        <>
            <div className="container">

            </div>
        </>
    )
}
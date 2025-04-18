import { useState } from "react"

export default function Reviews({ movieId }) {
    const initialData = {
        movie_id: movieId,
        name: '',
        vote: 1,
        text: ''
    }

    const [formData, setFormData] = useState(initialData)

    const api_url = 'http://localhost:3000/movies'

    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log({ name, value });

        setFormData({
            ...formData,
            [name]: value
        })
    }


    function handleFormSubmit(e) {
        e.preventDefault()
        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, body: JSON.stringify(formData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setFormData({ ...initialData, name: '', vote: '', description: '' })
            })
            .catch(err => console.error("Error saving review", err))
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="helpId"
                            placeholder=""
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Voto</label>
                        <input
                            type="number"
                            className="form-control"
                            name="vote"
                            id="vote"
                            aria-describedby="helpId"
                            placeholder=""
                            value={formData.vote}
                            onChange={handleInputChange}
                            min="1"
                            max="5"
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Descrizione</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            aria-describedby="helpId"
                            placeholder=""
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Invia</button>
                </form>

            </div>
        </>
    )
}
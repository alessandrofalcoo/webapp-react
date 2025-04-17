import { useState } from "react"

export default function Reviews() {
    const initialData = {
        name: '',
        vote: 1,
        description: '',
        review: ''
    }

    const [formData, setFormData] = useState(initialData)

    const api_url = 'http://localhost:3000/movies'

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
            setFormData(formData)
        })

    function handleFormSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <div className="container">
                <form action="POST" onSubmit={handleFormSubmit}></form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Voto</label>
                    <input
                        type="number"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Descrizione</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>

                <input name="" id="" className="btn btn-primary" type="submit" value="Submit" onSubmit={e => handleFormSubmit(e.target.value)} />


            </div>
        </>
    )
}
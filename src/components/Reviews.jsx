import { useState } from "react"

export default function Reviews() {
    const initialData = {
        name: '',
        vote: 1,
        description: '',
        review: ''
    }

    const [formData, setFormData] = useState(initialData)



    function handleFormSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <div className="container">
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

                <input name="" id="" className="btn btn-primary" type="submit" value="Submit" onSubmit={handleFormSubmit} />


            </div>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function CardForm({submitHandler,handleChange,deck, cardData, type}){
    
    return(
        <div className="CardForm">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="front" className="form-label">Front</label>
                    <textarea className="form-control" id="front" type="text" name="front" onChange={handleChange} value={cardData.front} placeholder="Front side of card" required/>

                </div>
                <div className="mb-3">
                    <label htmlFor="back" className="form-label">Back</label>
                    <textarea className="form-control" id="back" type="text" name="back" onChange={handleChange} value={cardData.back} placeholder="Back side of card" required/>
                    
                </div>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">{type === "create"?"Done":"Cancel"}</Link>
                <button type="submit" className="btn btn-primary">{type ==="create"?"Save":"Submit"}</button>
            </form>
        </div>
    )
}

export default CardForm
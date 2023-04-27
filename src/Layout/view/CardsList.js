import React from "react";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CardsList({cards,handleDeleteCards,deckId}){
    const cardsMapped = cards.map((card)=>{
        return(
        <div className="card mb-1 w-80" key={card.id} id={card.id}>
            <div className="card-body row pb-0">
                    <p className="card-text col">{card.front}</p>
                    <p className="card-text col">{card.back}</p>
            </div>
            <div className="card-body">
                    <button className="btn btn-danger float-right" onClick={handleDeleteCards}><BsTrash3Fill/></button>
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary mr-2 float-right"><BsPencilFill/> Edit</Link>
            </div>
        </div>
        )
    })
    return (
        <div className="cardsList">
            <h2>Cards</h2>
            {cardsMapped.length < 1? <p>You have no cards yet try adding some!</p>:cardsMapped}
        </div>
    )
}

export default CardsList
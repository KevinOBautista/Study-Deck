import React from "react";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CardsList(cards){
    const cardsMapped = cards.cards.map((card)=>{
        return(
        <div className="card mb-1 w-80">
            <div className="card-body">
                    <p className="text-muted card-text">Front: {card.front}</p>
                    <p className="text-muted card-text">Back: {card.back}</p>
                    <button className="btn btn-danger float-right"><BsTrash3Fill/></button>
                    <Link to="/decks/:deckId/cards/:cardId/edit" className="btn btn-secondary mr-2 float-right"><BsPencilFill/> Edit</Link>
            </div>
        </div>
        )
    })
    return (
        <div className="cardsList">
            <h2>Cards</h2>
            {cardsMapped}
            {console.log("This is cards:",cards)}
        </div>
    )
}

export default CardsList
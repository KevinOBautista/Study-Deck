import React from "react";

function Card({cards,card, flipHandler,face,nextHandler, cardNumber}){
    if(face === "front"){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {cardNumber + 1} of {cards.length}</h5>
                    <p className="card-text">{card.front}</p>
                    <button className="btn btn-secondary" onClick={flipHandler}>Flip</button>
            </div>
        </div>
        )
    }else{
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {cardNumber + 1} of {cards.length}</h5>
                    <p className="card-text">{card.back}</p>
                    <button className="btn btn-secondary mr-2" onClick={flipHandler}>Flip</button>
                    <button className="btn btn-primary" onClick={nextHandler}>Next</button>
            </div>
        </div>
        )
    }
}

export default Card
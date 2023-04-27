import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsHouseFill } from "react-icons/bs";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";

function Nav({deck}){
    const {path, params:{cardId}} = useRouteMatch()
    
    if(path.includes("/decks/:deckId/")){
        let lastParam = ""
        if(path === "/decks/:deckId/study"){
            lastParam = "Study"
        }
        else if(path === "/decks/:deckId/cards/new"){
            lastParam = "Add Card"
        }
        else if(path === "/decks/:deckId/edit"){
            lastParam = "Edit Deck"
        }
        else if(path === "/decks/:deckId/cards/:cardId/edit"){
            lastParam = `Edit Card ${cardId}`
        }
        return (
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/"><BsHouseFill/> Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
              </li>
              <li className="breadcrumb-item">
                <p className="text-secondary">{lastParam}</p>
              </li>
            </ol>
          </nav>
        )
    }
    else{
        let lastParam = ""
        if(path === "/decks/new"){
            lastParam = "Create Deck"
        }
        else{
            lastParam = deck.name
        }
        return (
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/"><BsHouseFill/> Home</Link>
              </li>
              <li className="breadcrumb-item">
                <p className="text-secondary">{lastParam}</p>
              </li>
            </ol>
          </nav>
        )
    }
    
}

export default Nav
import React from "react";
import Deck from "./Deck";
import { useState,useEffect } from "react";
import {listDecks} from "../../utils/api"
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function DeckList(){
    const [decks, setDecks] = useState([]);
    useEffect( () => {
        listDecks()
        .then(data => setDecks(data));
    }, [])

    const mappedDecks = decks.map(deck => <Deck deck={deck} setDecks={setDecks}/>)
    return(
        <div className="deck-view ">
            <Link className="btn btn-secondary mb-2" to="/decks/new"><BsPlusCircleFill/> Create Deck</Link>
            {mappedDecks}
        </div>
    )
}

export default DeckList
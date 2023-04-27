import React, { useState,useEffect } from "react";
import EditDeckForm from "./EditDeckForm";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav";
function EditDeck(){
    const [deck, setDeck] = useState({})
    const {deckId} = useParams()
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setDeck(data))
    },[deckId])
    return(
        <div className="editDeck">
            <Nav deck={deck}/>
            <h1>Edit Deck</h1>
            <EditDeckForm deck={deck}/>
        </div>
    )
}

export default EditDeck
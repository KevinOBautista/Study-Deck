import React, { useEffect, useState } from "react";
import DeckNav from "./DeckNav";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck,listDecks } from "../../utils/api";

function DeckForm(){
    const initialdeckData = {
        name:"",
        description:"",
    }
    const [deckData, setDeckData] = useState(initialdeckData)
    const [decks, setDecks] = useState([])
    const history = useHistory()

    useEffect( () => {
        listDecks()
        .then(data => setDecks(data));
    }, [])

    async function submitHandler(event){
        event.preventDefault()
        console.log("Form Info:",deckData.name,deckData.description)
        await createDeck(deckData)
        setDeckData({...initialdeckData})
        console.log("current Decks:",decks)
        history.push(`/decks/${decks.length+1}`)
    }

    function handleChange({target}){
        setDeckData({
            ...deckData,
            [target.name]: target.value
        })
    }

    return(
        <div className="createDeck">
            <DeckNav></DeckNav>
            <h1>Create Deck</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input className="form-control" id="name" type="text" name="name" onChange={handleChange} value={deckData.name} placeholder="Deck Name" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" onChange={handleChange} value={deckData.description} placeholder="Brief description of the deck" rows={4}
                     required></textarea>
                </div>
                <Link to="/" className="btn btn-secondary mr-2">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default DeckForm
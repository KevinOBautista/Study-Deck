import React from "react";
import {BsBookHalf, BsEyeFill, BsTrash3Fill} from "react-icons/bs"
import { Link,Switch,Route,useHistory } from "react-router-dom";
import Study from "../study/Study";
import { deleteDeck,listDecks } from "../../utils/api";
import DeckView from "../deckEdit/DeckView";

function Deck({deck,setDecks}){
    const history = useHistory()
    const handleDelete = async (id) => {
        console.log("This is the ID:",deck.id)
        const result = window.confirm("Delete this deck?\n You will not be able to recover it!");
        if(result){
            await deleteDeck(deck.id)
            listDecks()
            .then(data => setDecks(data));
        }
    }
    return(
        <div className="card mb-2 w-75" key={deck.id} name={deck.id}>
            <div className="card-body">
                <p  className="card-text float-right"><small className="text-muted">{deck.cards.length} cards</small></p>
                <h5 className="card-title">
                    {deck.name}
                </h5>
                <p className="card-text">
                    {deck.description}
                </p>
                <Link className="btn btn-secondary mr-2" to={`/decks/${deck.id}`}><BsEyeFill/> View</Link>
                <Link className="btn btn-primary mr-2" to={`/decks/${deck.id}/study`}><BsBookHalf/> Study</Link>
                <button className="btn btn-danger mr-2 float-right" onClick={handleDelete}><BsTrash3Fill/></button>
            <Switch>
                <Route path="/decks/:deckId/study">
                    <Study deck={deck}/>
                </Route>
                <Route path="/decks/:deckId">
                    <DeckView/>
                </Route>
            </Switch>
            </div>
        </div>
    )
}

export default Deck
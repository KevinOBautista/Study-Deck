import React, { useState,useEffect } from "react";
import DeckEditNav from "./DeckEditNav";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck,deleteDeck } from "../../utils/api";
import CardsList from "./CardsList";
import { BsBookHalf, BsPencilFill, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";

function DeckView(){
    const [deck, setDeck] = useState({})
    const {deckId} = useParams()
    const [cards,setCards] = useState([])
    const history = useHistory()
    useEffect(()=>{
        readDeck(deckId)
        .then(data => {setDeck(data);setCards(data.cards)})
    },[])
    const handleDelete = async (id) => {
        console.log("This is the ID:",deck.id)
        const result = window.confirm("Delete this deck?\n You will not be able to recover it!");
        if(result){
            await deleteDeck(deck.id)
            history.push("/")
        }
    }
    return(
        <>
        <DeckEditNav deck={deck}/>
        <div className="Deck mb-3">
            <h4>{deck.name}</h4>
            <p>{deck.description}</p>
            <Link className="btn btn-secondary mr-2"><BsPencilFill/> Edit</Link>
            <Link className="btn btn-primary mr-2" to={`/decks/${deckId}/study`}><BsBookHalf/> Study</Link>
            <Link className="btn btn-primary mr-2"><BsPlusCircleFill/> Add Cards</Link>
            <button className="btn btn-danger mr-2 float-right" onClick={handleDelete}><BsTrash3Fill/></button>
        </div>
        <CardsList cards={cards}/>
        </>
    )
}

export default DeckView
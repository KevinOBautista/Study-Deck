import React, { useState,useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck,deleteDeck, deleteCard } from "../../utils/api";
import CardsList from "./CardsList";
import { BsBookHalf, BsPencilFill, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";
import Nav from "../Nav";

function DeckView(){
    const [deck, setDeck] = useState({})
    const {deckId} = useParams()
    const [cards,setCards] = useState([])
    const history = useHistory()
    useEffect(()=>{
        readDeck(deckId)
        .then(data => {setDeck(data);setCards(data.cards)})
    },[deckId])
    const handleDelete = async (id) => {
        console.log("This is the ID:",deck.id)
        const result = window.confirm("Delete this deck?\n You will not be able to recover it!");
        if(result){
            await deleteDeck(deck.id)
            history.push("/")
        }
    }
    const handleDeleteCards =  async (event) => {
        const result = window.confirm("Delete this card? \n \n You will not be able to recover it.")
        if(result){
            const cardId = event.target.parentElement.parentElement.id
            console.log("CardId:",cardId)
            await deleteCard(cardId)
            readDeck(deckId)
            .then(data => {setDeck(data);setCards(data.cards)})
        }
    }

    return(
        <>
        <Nav deck={deck}/>
        <div className="Deck mb-3">
            <h4>{deck.name}</h4>
            <p>{deck.description}</p>
            <Link className="btn btn-secondary mr-2" to={`/decks/${deckId}/edit`}><BsPencilFill/> Edit</Link>
            <Link className="btn btn-primary mr-2" to={`/decks/${deckId}/study`}><BsBookHalf/> Study</Link>
            <Link className="btn btn-primary mr-2" to={`/decks/${deckId}/cards/new`}><BsPlusCircleFill/> Add Cards</Link>
            <button className="btn btn-danger mr-2 float-right" onClick={handleDelete}><BsTrash3Fill/></button>
        </div>
        <CardsList cards={cards} deckId={deckId} handleDeleteCards={handleDeleteCards}/>
        </>
    )
}

export default DeckView
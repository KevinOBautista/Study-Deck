import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck, updateCard, } from "../../utils/api";
import Nav from "../Nav";

function EditCard(){
    const history = useHistory()
    const {deckId,cardId} = useParams()
    const [deck, setDeck] = useState({})
    const [card, setCard] = useState({})
    const [cardData, setCardData] = useState({})
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setDeck(data));
        readCard(cardId)
        .then(data => setCard(data))
        .then(data => setCardData(data));

    },[deckId])

    function handleChange({target}){
        setCard({
            ...card,
            [target.name]: target.value
        })
    }

    async function submitHandler(event){
        event.preventDefault()
        await updateCard(card)
        history.push(`/decks/${deckId}`)
    }

    return (
    <>
        <Nav deck={deck}/>
        <h1>Edit Card</h1>
        <CardForm deck={deck} handleChange={handleChange} submitHandler={submitHandler} cardData={card} type={true}/>
    </>
    )
}

export default EditCard
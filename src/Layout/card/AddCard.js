import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, } from "../../utils/api";
import Nav from "../Nav";
import { createCard } from "../../utils/api";

function AddCard(){
    const initialCardData = {
        front:"",
        back:"",
    }
    const [deck, setDeck] = useState({})
    const {deckId} = useParams()
    const [cardData, setCardData] = useState(initialCardData)
    useEffect(()=>{
        readDeck(deckId)
        .then(data => setDeck(data));

    },[deckId])

    function handleChange({target}){
        setCardData({
            ...cardData,
            [target.name]: target.value
        })
    }

    async function submitHandler(event){
        event.preventDefault()
        await createCard(deckId,cardData)
        setCardData(initialCardData)
    }

    return (
    <>
        <Nav deck={deck}/>
        <h3>{deck.name}: Add Card</h3>
        <CardForm deck={deck} handleChange={handleChange} submitHandler={submitHandler} cardData={cardData} type={"create"}/>
    </>
    )
}

export default AddCard
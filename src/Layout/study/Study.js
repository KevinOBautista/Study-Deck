import React from "react";
import { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import {readDeck} from "../../utils/api"
import Card from "./Card";
import { BsPlusCircleFill } from "react-icons/bs";
import Nav from "../Nav";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Study(){
    const {deckId} = useParams()
    const [deck, setDeck] = useState({})
    const [cards, setCards] = useState([])
    const [card, setCard] = useState({})
    const [face,setFace] = useState("front")
    const [cardNumber, setCardNumber] = useState(0)
    const history = useHistory()
    function flipHandler(event){
        if(face === "front"){
            setFace("back")
        }else{
            setFace("front")
        }
    }
    function nextHandler(event){
        if(cardNumber === cards.length - 1 ){
            const result = window.confirm("Restart cards?\n \n Click 'cancel' to return to the home page");
            if(result){
                setCardNumber(0)
                setFace("front")
                setCard(cards[0])
            }else{
                history.push("/")
            }
        }
        else{
            setFace("front")
            setCard(cards[cardNumber + 1])
            setCardNumber(cardNumber+1)
        }
    }
    useEffect(()=>{
        readDeck(deckId)
        .then(data => {setDeck(data); setCards(data.cards); setCard(data.cards[0])})
    },[deckId])
    return(
        <>
        <Nav deck={deck}/>
        <h1> Study: {deck.name}</h1>
        {cards.length > 2 && <Card cards={cards} card={card} flipHandler={flipHandler} face={face} nextHandler={nextHandler} cardNumber={cardNumber}/>}
        {cards.length <= 2 && 
            <>
                <h2> Not enough cards.</h2> 
                <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                <Link className="btn btn-primary" to={`/decks/${deckId}/cards/new`}><BsPlusCircleFill/> Add Cards</Link>
            </>}
        </>
    )
}

export default Study
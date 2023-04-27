import React, { useEffect, useState } from "react";
import { Link,useParams,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../../utils/api";

function EditDeckForm(){
    const [deck, setDeck] = useState({})
    const {deckId} = useParams()
    const [deckData, setDeckData] = useState({})
    const [tempDeck,setTempDeck] = useState()
    const history = useHistory()
    useEffect(()=>{
        readDeck(deckId)
        .then(data => {
            setDeck(data);
            setTempDeck(data);
            setDeckData({name:data.name,description:data.description})
        })
    },[deckId])


    async function submitHandler(event){
        event.preventDefault()
        console.log(deckData)
        console.log("temp Deck:",tempDeck)
        await updateDeck(tempDeck)
        history.push(`/decks/${deckId}`)
    }

    function handleChange({target}){
        setDeckData({
            ...deckData,
            [target.name]: target.value
        })
        setTempDeck({
            ...tempDeck,
            [target.name]:target.value
        })
    }

    return(
        <div className="createDeck">
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
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditDeckForm
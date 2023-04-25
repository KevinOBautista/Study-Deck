import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function DeckNav(){
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/"><BsHouseFill/> Home</Link>
          </li>
          <li className="breadcrumb-item">
            <p className="text-secondary">Create Deck</p>
          </li>
        </ol>
      </nav>
    )
}

export default DeckNav
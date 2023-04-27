import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Route, Switch} from "react-router-dom"
import DeckList from "./home/DeckList";
import Study from "./study/Study";
import DeckForm from "./newDeck/DeckForm";
import DeckView from "./view/DeckView";
import EditDeck from "./edit/EditDeck"
import AddCard from "./card/AddCard"
import EditCard from "./card/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <DeckList/>
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study></Study>
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>
          <Route path="/decks/new">
            <DeckForm/>
          </Route>
          <Route path="/decks/:deckId">
            <DeckView/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;

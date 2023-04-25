import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Route, Switch} from "react-router-dom"
import DeckList from "./home/DeckList";
import Study from "./study/Study";
import DeckForm from "./newDeck/DeckForm";
import DeckView from "./deckEdit/DeckView";

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
          <Route path="/decks/:deckId/study">
            <Study></Study>
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

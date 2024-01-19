/* 

Crea due diversi reducer: uno continuerà a memorizzare i preferiti, mentre l'altro sarà riservato ad ospitare l'array dei risultati derivante dalla ricerca.

Per riempire questa porzione del Redux Store, muovi l'operazione di fetch dentro un action creator "speciale" come abbiamo fatto questa mattina, in modo da fare la dispatch di un'azione contenente i risultati solamente al termine dell'operazione asincrona.

Mantieni intatto il resto delle funzionalità, e se non l'hai ancora fatto, fornisci all'utente la capacità di rimuovere un'azienda dalla lista dei preferiti e aggiungi "funzionalità cuore pieno / cuore vuoto" nella pagina principale*/

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../slice/favoritesSlice";
import searchResultsReducer from "../slice/searchResultsSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;


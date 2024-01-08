//Crea un nuovo componente a funzione, chiamalo ButtonComponent: dovrebbe ritornare un tag ‘button’. Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai tag  <button></button> .
import React from "react";

export default function ButtonComponent(props) {
    return (
        <button>
        {props.text}
        </button>
        );
    }
//Crea un nuovo componente come classe, chiamalo ImageComponent: dovrebbe ritornare un tag ‘img’. La fonte dell’immagine ‘src’ oltre che l’attributo ‘alt’ dovrebbero essere passate tramite Props del componente e assegnate al tag  <img /> .
import React from "react";

export default function ImageComponent (props) {
    return (
         <img src={props.src} alt={props.alt} />
        )
    };
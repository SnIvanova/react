//Crea un nuovo componente come classe, chiamalo ImageComponent: dovrebbe ritornare un tag ‘img’. La fonte dell’immagine ‘src’ oltre che l’attributo ‘alt’ dovrebbero essere passate tramite Props del componente e assegnate al tag  <img /> .
import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} className="small-image"/>
    );
  }
}

export default ImageComponent;
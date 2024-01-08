import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';



function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-pic"><ImageComponent src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg" alt="image of the girl that looking down"  /> 
        </div>
        <ButtonComponent text="Click me" />
        <p> </p>

      </header>
    </div>
  );
}

export default App;



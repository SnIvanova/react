import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import Welcome from './component/Welcome';
import AllTheBooks from './component/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
    </div>
  );
}

export default App;

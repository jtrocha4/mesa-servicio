import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Inicio from './componentes/Inicio';
import NavBar from './componentes/NavBar';
import Servicio from "./componentes/Servicio";
import { auth } from "./firebase";

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        <NavBar firebaseUser={firebaseUser}></NavBar>
        <Routes>
          <Route path='/' exact element={<Inicio></Inicio>}></Route>
          <Route path='/mesa-servicio' exact element={<Inicio></Inicio>}></Route>
          <Route path='/inicio' exact element={<Inicio></Inicio>}></Route>
          <Route path="/servicio" exact element={<Servicio></Servicio>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

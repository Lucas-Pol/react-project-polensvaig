import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import Container from './components/container';

function App() {
 

  return (
    <>
    <div>
      <NavBar/>
    </div>
      
        <Container>
          <div>
          <p>Probando el container</p>
          </div>
        </Container>
      
    </>
  )
}

export default App

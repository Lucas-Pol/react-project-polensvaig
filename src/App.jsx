import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import Routing from './components/routing';

function App() {
 

  return (
    <>
    <div>
      <NavBar/>
    </div>
      
        <div className='container mt-3'>
          <Routing/>
          
        </div>
      
    </>
  )
}

export default App

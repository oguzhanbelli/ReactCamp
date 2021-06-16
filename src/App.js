
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
      <Dashboard>
        
      </Dashboard>
      
      </Container>
      <ToastContainer />
    
    </div>
  );
}

export default App;

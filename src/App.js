import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import SubNav from './Component/SubNav';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <SubNav/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

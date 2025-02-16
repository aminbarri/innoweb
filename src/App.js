
import './App.css';
import {Home ,AboutUs} from './Pages/index';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />

      </Routes>
      </>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Accedi from './Menu/Accedi';
import Acquisti from './Menu/Acquisti';
import Home from './Menu/Home';
import Registrazione from './Menu/Registrazione';


function App() {
  
    return <Router>
  <Routes>
  <Route path = '/'  element = {<Home />} />
  <Route path = '/accedi'  element = {<Accedi />} />
  <Route path = '/registrazione'  element = {<Registrazione />} />
  <Route path = '/acquisti' element= {<Acquisti />} />
 

</Routes>
  
</Router>

}

export default App;

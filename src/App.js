import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Accedi from './Menu/Accedi';
import Home from './Menu/Home';

function App() {
  
    return <Router>
  <Routes>
  <Route path = '/'  element = {<Home />} />
  <Route path = '/accedi'  element = {<Accedi />} />
</Routes>
  
</Router>

}

export default App;

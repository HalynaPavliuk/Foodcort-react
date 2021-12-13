import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import CategoryDishes from './pages/CategoryDishes';
import Recipe from './pages/Recipe';


function App() {
  return (
    <div className="App">
      <Router basename="Foodcort-react">
      <Header />
      <main className="container content">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route element={<NotFound/>} />
        <Route path="/category/:name" element={<CategoryDishes/>} />
        <Route path="/meal/:id" element={<Recipe />} />
      </Routes>
      
      </main>;
      <Footer />
      </Router>
    </div>
  );
}

export default App;

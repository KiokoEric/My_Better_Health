import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home.jsx";
import Exercise from "./Pages/Exercise/Exercise.jsx";
import Nutrition from "./Pages/Nutrition/Nutrition.jsx";
import Recipe from "./Pages/Recipe/Recipe.jsx";
import Information from "./Pages/Information/Information.jsx";
import Fitness from "./Pages/Fitness/Fitness.jsx";
import Favourites from './Pages/Favourites/Favourites.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Exercise' element={<Exercise />} />
        <Route path='/Nutrition' element={<Nutrition />} />
        <Route path='/Recipe' element={<Recipe />} />
        <Route path='/:idMeal' element={<Information />} />
        <Route path='/Fitness_Calculator' element={<Fitness />} />
        <Route path='/Favourites' element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;

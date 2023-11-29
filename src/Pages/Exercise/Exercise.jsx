import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../Components/Context/AppContext';
import "../Exercise/Exercise.css";

const Exercise = () => {

    const ExerciseState = () => {
        let Value = localStorage.getItem("Values");

        if (Value === "") {
            return []
        } else {
            return JSON.parse(localStorage.getItem("Values"))
        }
    }

    const {Favourites, AddToFavourites, RemoveFromFavourites} = useAppContext()
    const[Search,setSearch] = useState("")
    const[SearchError, setSearchError] = useState([])
    const[Exercises, setExercises] = useState([])

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const FavouritesChecker = (name) => {
        const Check = Favourites.some((Exercise) => Exercise.name === name) 
        return Check
    }

    const SearchExercise = async (e) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly select one of the options above.")
        } else {
            const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Search}`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setExercises(result)
            setSearchError("")
        } catch (error) {
            console.error(error);
        }
        }
    }

    useEffect(() => {
        localStorage.setItem("Values", JSON.stringify(Exercises))
    },[Exercises]);


return (
    <div className='Exercise' >
        <section>
            <h1>Search your body part</h1>
            <form onSubmit={SearchExercise}>
                <select name="" id="Select" value={Search} onChange={handleSearch} >
                    <option value="">Search among the bodyparts below</option>
                    <option value="back">Back</option>
                    <option value="cardio">Cardio</option>
                    <option value="chest">Chest</option>
                    <option value="lower arms">Lower Arms</option>
                    <option value="lower legs">Lower Legs</option>
                    <option value="neck">Neck</option>
                    <option value="shoulders">Shoulders</option>
                    <option value="upper arms">Upper Arms</option>
                    <option value="upper legs">Upper Legs</option>
                    <option value="waist">Waist</option>
                </select>
                <button onClick={SearchExercise} type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                <span>{SearchError}</span>
                <p>The secret of getting ahead is getting started.</p>
            </form>
        </section>
        <section>
        {
        (!Exercises) ? <h2 className='Failure' >No Results Found</h2> :
        Exercises.map((Exercise) => {
            return(
                <div key={Exercise.id} >
                    <figure className='ExerciseOptions' >
                        <img src={Exercise.gifUrl} alt="" />
                        <h2>{Exercise.name}</h2>
                        <div>
                            <h3>Target Muscle: {Exercise.target}</h3>
                            <h3>Equipment: {Exercise.equipment}</h3>
                        </div>
                    </figure> 
                    {
                    FavouritesChecker(Exercise.name) ? (
                        <button onClick={() => RemoveFromFavourites(Exercise.name)} >Remove from Favourites</button>
                    ) : (
                        <button onClick={() => AddToFavourites(Exercise)} >Add to Favourites</button>
                    )
                    }
                </div>
            )
        })
        }
        </section>
    </div>
)
}

export default Exercise
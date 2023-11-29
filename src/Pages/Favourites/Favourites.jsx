import React from 'react';
import "../Favourites/Favourites.css"
import { useAppContext } from '../../Components/Context/AppContext';

const Favourites = () => {

    const {Favourites, RemoveFromFavourites} = useAppContext()

return (
    <div className='Favourite' >
        {
        (Favourites.length > 0) ?  
        Favourites.map((Item) => {
            return(
                <div>
                    <article >
                        <img src={Item.gifUrl} alt="" />
                        <h2>{Item.name}</h2>
                        <div>
                            <h3>Target Muscle: {Item.target}</h3>
                            <h3>Equipment: {Item.equipment}</h3>
                        </div>
                    </article>
                    <button onClick={() => RemoveFromFavourites(Item.name)} >Remove from Favourites</button>
                </div>
            )
        }) : <h2 className='Failure'>No Favourites Found.</h2>
        }
    </div>
)
}

export default Favourites 
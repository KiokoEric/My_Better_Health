import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error('App context must be within App context provider. ')
    }
    return context
}

const AppContextProvider = ({children}) => {

    const[Favourites, setFavourites]= useState([])

    const AddToFavourites = (Item) => {
        const OldFavourites = [...Favourites]
        const NewFavourites = OldFavourites.concat(Item);
        setFavourites(NewFavourites)
    }

    const RemoveFromFavourites = (name) => {
        const OldFavourites = [...Favourites]
        const NewFavourites = OldFavourites.filter((Exercise) => Exercise.name !== name)
        setFavourites(NewFavourites)
    }

    return (
        <AppContext.Provider value={{Favourites, AddToFavourites, RemoveFromFavourites}} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
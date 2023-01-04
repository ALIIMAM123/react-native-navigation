// creating context
import { createContext, useState } from "react";

export const FavouriteContext = createContext({
	// ids of favourite Meal
	ids: [],
	// add favourite function   - add new id
	addFavourite: (id) => {},
	// remove favourite function - remove id
	removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
	//All the Logic we need to manage this context , Actual Implementation of this methods and logic that we need for managing an array of ids
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	function addFavourite(id) {
		setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
	}

	function removeFavorite(id) {
		setFavouriteMealIds((currentFavIds) =>
			currentFavIds.filter((mealId) => mealId !== id),
		);
	}

	const value = {
		ids: favouriteMealIds,
		addFavourite: addFavourite,
		removeFavourite: removeFavorite,
	};

	return (
		<FavouriteContext.Provider value={value}>
			{children}
		</FavouriteContext.Provider>
	);
}

export default FavouritesContextProvider;

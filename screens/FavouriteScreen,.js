import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourite-context";

function FavouriteScreen() {
	const favouriteMealCtx = useContext(FavouriteContext);

	const favouriteMeals = MEALS.filter((meal) =>
		favouriteMealCtx.ids.includes(meal.id),
	);

	if (favouriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.textLine}>You have no Favourite Meal yet</Text>
			</View>
		);
	}
	return <MealsList item={favouriteMeals} />;
}
export default FavouriteScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textLine: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
	},
});

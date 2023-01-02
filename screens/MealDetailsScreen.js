import { useLayoutEffect } from "react";
import { Text, Image, View, StyleSheet, Button, Alert } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	// console.log(selectedMeal);

	function headerButtonPressed() {
		Alert.alert("Alert Msg", "My Alert Msg", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{ text: "OK", onPress: () => console.log("OK Pressed") },
		]);
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton icon="star" color="white" onPress={headerButtonPressed} />
				);
			},
		});
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: selectedMeal.imageUrl }}
				style={styles.imageContainer}
			/>
			<View>
				{/* {selectedMeal?.map((each) => (
					<Text>{each}</Text>
				))} */}
				<MealDetails
					title={selectedMeal.title}
					duration={selectedMeal.duration}
					affordability={selectedMeal.affordability}
					complexity={selectedMeal.complexity}
					ingredients={selectedMeal.ingredients}
					steps={selectedMeal.steps}
					isGlutenFree={selectedMeal.isGlutenFree}
					isVegan={selectedMeal.isVegan}
					isVegetarian={selectedMeal.isVegetarian}
					isLactoseFree={selectedMeal.isLactoseFree}
				/>
			</View>
		</View>
	);
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#291708",
		margin: 12,
		borderRadius: 30,
		marginTop: 10,
		flex: 1,
		padding: 10,
	},
	imageContainer: {
		height: 250,
		borderRadius: 20,
		borderColor: "#120801",
		borderWidth: 4,
		padding: 10,
	},
});

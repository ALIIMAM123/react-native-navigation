import { useEffect, useLayoutEffect } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealList";
// import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS, Meals } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId;
	//    or
	// const route = useRoute();
	// route.params
	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(everyCategory) => everyCategory.id === catId,
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	// function renderMealItem(itemData) {
	// 	const item = itemData.item;
	// 	const mealItemProps = {
	// 		id: item.id,
	// 		title: item.title,
	// 		imageUrl: item.imageUrl,
	// 		affordability: item.affordability,
	// 		complexity: item.complexity,
	// 		duration: item.duration,
	// 	};
	// 	return <MealItem {...mealItemProps} />;
	// }

	// return (
	// 	<View style={styles.container}>
	// 		{/* <Text>Meals OverView Screen - {catId}</Text> */}
	// 		<FlatList
	// 			data={displayedMeals}
	// 			keyExtractor={(item) => item.id}
	// 			renderItem={renderMealItem}
	// 			showsVerticalScrollIndicator={false}
	// 			showsHorizontalScrollIndicator={false}
	// 		/>
	// 	</View>
	// );

	//  ...............................//
	return <MealsList item={displayedMeals} />;
}

export default MealsOverviewScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: 12,
// 		// backgroundColor: "green",
// 	},
// 	boxContainer: {
// 		// backgroundColor: "green",
// 		flex: 1,
// 		width: "100%",
// 	},
// });

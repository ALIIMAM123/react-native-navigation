import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ item }) {
	function renderMealItem(itemData) {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			{/* <Text>Meals OverView Screen - {catId}</Text> */}
			<FlatList
				data={item}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}

export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		// backgroundColor: "green",
	},
	boxContainer: {
		// backgroundColor: "green",
		flex: 1,
		width: "100%",
	},
});

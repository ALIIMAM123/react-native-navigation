import { View, Text, StyleSheet } from "react-native";
import { Meals } from "../data/dummy-data";

function MealsOverviewScreen() {
	return (
		<View style={styles.container}>
			<Text>Meals OverView Screen</Text>
		</View>
	);
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 18,
	},
});

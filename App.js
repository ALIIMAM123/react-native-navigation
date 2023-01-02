import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "brown",
						},
						headerTintColor: "white",
						contentStyle: {
							backgroundColor: "#612c13",
						},
					}}
				>
					<Stack.Screen
						name="Meals Categories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen
						name="Meals Overview"
						component={MealOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					/>
					{/* MEAL DETAILS SCREEN */}
					<Stack.Screen
						name="Meals Details"
						component={MealDetailsScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 20,
	},
});

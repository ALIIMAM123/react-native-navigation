import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Meals Categories" component={CategoriesScreen} />
					<Stack.Screen name="Meals Overview" component={MealOverviewScreen} />
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

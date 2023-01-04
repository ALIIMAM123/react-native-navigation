import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Icons
import { Ionicons } from "@expo/vector-icons";

// drawer-navigator
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavouriteScreen from "./screens/FavouriteScreen,";
import FavouritesContextProvider from "./store/context/favourite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "brown",
				},
				headerTintColor: "white",
				sceneContainerStyle: {
					backgroundColor: "#612c13",
				},
				drawerContentStyle: {
					backgroundColor: "#612c13",
				},

				drawerActiveBackgroundColor: "#e4baa1",

				drawerActiveTintColor: "612c13",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favourite"
				component={FavouriteScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<FavouritesContextProvider>
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
							name="Drawer"
							component={DrawerNavigator}
							options={{
								title: "All Categories",
								headerShown: false,
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

						<Stack.Screen
							name="Meals Details"
							component={MealDetailsScreen}
							options={{
								title: "Meal Details",
							}}
							// options={({ route, navigation }) => {
							// 	const catId = route.params.categoryId;
							// 	return {
							// 		title: catId,
							// 	};
							// }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavouritesContextProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 20,
	},
});

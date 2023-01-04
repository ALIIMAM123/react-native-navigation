import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Ripple from "react-native-material-ripple";

function MealDetails({
	title,
	duration,
	complexity,
	affordability,
	ingredients,
	steps,
	isGlutenFree,
	isVegan,
	isVegetarian,
	isLactoseFree,
}) {
	// console.log(isLactoseFree, "isLactoseFree");

	const [gluten, setGluten] = useState(isGlutenFree);
	const [isVegas, setIsVegas] = useState(isVegan);
	const [isvegetarian, setisVegetarian] = useState(isVegetarian);
	const [islactose, setIsLactose] = useState(isLactoseFree);

	// console.log(islactose, "isLactose");

	useLayoutEffect(() => {
		if (isGlutenFree === true) {
			setGluten("YES");
		} else {
			setGluten("NO");
		}
	}, [isGlutenFree]);

	// isVegas
	useLayoutEffect(() => {
		if (isVegan === true) {
			setIsVegas("YES");
		} else {
			setIsVegas("NO");
		}
	}, [isVegan]);

	// Vegatarian
	useLayoutEffect(() => {
		if (isVegetarian === true) {
			setisVegetarian("YES");
		} else {
			setisVegetarian("NO");
		}
	}, [isVegetarian]);

	setIsLactose;

	useLayoutEffect(() => {
		if (isVegetarian === true) {
			setIsLactose("YES");
		} else {
			setIsLactose("NO");
		}
	}, [isVegetarian]);

	// console.log(gluten, "Gluten" );

	let content;
	let vegascontent;
	let vegetarianContent;
	let lactoseContent;

	if (gluten) {
		content = <Text>{gluten}</Text>;
	}
	if (isVegas) {
		vegascontent = <Text>{isVegas}</Text>;
	}
	if (isvegetarian) {
		vegetarianContent = <Text>{isvegetarian}</Text>;
	}

	if (islactose) {
		lactoseContent = <Text>{islactose}</Text>;
	}
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.MealdetailsContainer}>
					<Text style={styles.detailsItemHeading}>FOOD DESCRIPTION</Text>
					<Ripple
						rippleColor="#783d1d"
						rippleFades={true}
						rippleCentered={true}
						rippleContainerBorderRadius={20}
						rippleSequential={true}
						rippleDuration={500}
						rippleOpacity={0.4}
					>
						<Text style={[styles.detailsItem, styles.title]}>{title}</Text>
					</Ripple>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Time</Text>
						<Text style={styles.detailsItem}>{duration} sec</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Complexity</Text>
						<Text style={styles.detailsItem}>{complexity}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Affordability</Text>
						<Text style={styles.detailsItem}>{affordability}</Text>
					</View>
					<View style={[styles.ingredientContainer, styles.itemContainer]}>
						<Text style={styles.detailsItemKey}>Ingredients</Text>
						<Text style={[styles.detailsItem]}>{ingredients}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Steps</Text>
						<Text style={styles.detailsItem}>{steps}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>GlutenFree</Text>

						<Text style={styles.detailsItem}>{content}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Vegan</Text>
						<Text style={styles.detailsItem}>{vegascontent}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Vegetarian</Text>
						<Text style={styles.detailsItem}>{vegetarianContent}</Text>
					</View>

					<View style={styles.itemContainer}>
						<Text style={styles.detailsItemKey}>Lactose Free</Text>
						<Text style={styles.detailsItem}>{lactoseContent}</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default MealDetails;

const styles = StyleSheet.create({
	safeArea: {
		// flex: 1,
		marginTop: 5,
	},
	scrollView: {
		// backgroundColor: "red",
		height: "75%",
	},
	MealdetailsContainer: {
		backgroundColor: "#402917",
		padding: 13,
		height: "75%",
		flex: 1,
		borderRadius: 15,
	},
	detailsItemHeading: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
	detailsItemKey: {
		color: "white",
		margin: 8,
		padding: 4,
		fontSize: 13,
		fontWeight: "bold",
	},
	detailsItem: {
		color: "white",
		margin: 8,
		padding: 4,
		fontSize: 13,
	},
	title: {
		backgroundColor: "#33190b",
		fontSize: 15,
		fontWeight: "bold",
		padding: 20,
		borderRadius: 10,
		textAlign: "center",
	},
	emptyContainer: {
		height: 10,
		width: 10,
		marginRight: 20,
		borderRadius: 5,
		backgroundColor: "white",
	},
	itemContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#9c4a1e",
		marginTop: 10,
		borderRadius: 10,
	},
	ingredient: {
		marginRight: 10,
		width: "100%",
		dispay: "flex",
		alignSelf: "flex-end",
	},
});

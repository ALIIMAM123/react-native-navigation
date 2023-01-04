import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	FlatList,
} from "react-native";
import Slider from "../Slider";

import { useNavigation } from "@react-navigation/native";

function MealItem(props) {
	const navigation = useNavigation();
	function selectMealItemHandler() {
		navigation.navigate("Meals Details", {
			mealId: id,
		});
	}

	const { title, affordability, complexity, duration, imageUrl, id } = props;
	// console.log(title, "title");
	const help = { title, affordability, complexity, duration };
	const help1 = [help];
	// console.log(help, "help");

	function renderHelpList(itemData) {
		const item = itemData.item;
		const helpData = {
			// itemCheck: item.item,
			titleCheck: item.title,
			affordabilityCheck: item.affordability,
			complexityCheck: item.complexity,
			durationCheck: item.duration,
		};

		return <Slider {...helpData} />;
	}
	return (
		<View style={styles.MealItemContainer}>
			<View style={styles.outerContainer}>
				<Pressable
					android_ripple={{ color: "#cacccb" }}
					style={({ pressed }) => {
						pressed ? styles.buttonPressed : null;
					}}
					onPress={selectMealItemHandler}
				>
					<View style={styles.innerContainer}>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						{/* <FlatList /> */}
						<View style={styles.boxContainer}>
							<FlatList
								data={help1}
								keyExtractor={(item) => item}
								renderItem={renderHelpList}
								horizontal
								showsHorizontalScrollIndicator={true}
							/>
						</View>
					</View>
				</Pressable>
			</View>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	MealItemContainer: {
		// backgroundColor: "red",
	},
	image: {
		height: 200,
		margin: 10,
		borderRadius: 20,

		// width: "100%",
	},
	outerContainer: {
		// backgroundColor: "green",
		borderRadius: 20,
		margin: 3,
		overflow: "hidden",
	},
	boxContainer: {
		// backgroundColor: "green",
		flex: 1,
		width: "100%",
	},
	buttonPressed: {
		elevation: 100,

		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		opacity: 0.3,

		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
});

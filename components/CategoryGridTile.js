import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
	// const navigation = useNavigation();

	return (
		<View style={[styles.gridItem, { backgroundColor: color }]}>
			<Pressable
				android_ripple={{ color: "#b05305" }}
				// style={styles.buttonStyle}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,

		borderRadius: 150,

		elevation: 30,

		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,

		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
		padding: 30,
	},
	buttonPressed: {
		opacity: 0.3,
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		padding: 12,
		// backgroundColor: "green",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 11,
	},
});

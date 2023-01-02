import { Text, View, StyleSheet } from "react-native";

function Slider(props) {
	// console.log(props, "props");
	const {
		itemCheck,
		titleCheck,
		affordabilityCheck,
		complexityCheck,
		durationCheck,
	} = props;
	console.log(complexityCheck, "affor");
	return (
		<View style={styles.horizontalFlat}>
			<Text style={styles.eachItem}>{titleCheck}</Text>
			<Text style={styles.eachItem}>{affordabilityCheck}</Text>
			<Text style={styles.eachItem}>{complexityCheck}</Text>
			<Text style={styles.eachItem}>{durationCheck}</Text>
		</View>
	);
}

export default Slider;

const styles = StyleSheet.create({
	horizontalFlat: {
		display: "flex",
		flexDirection: "row",

		flex: 1,
		overflow: "hidden",
	},
	eachItem: {
		backgroundColor: "white",
		margin: 10,
		padding: 6,
		borderRadius: 10,
		flex: 1,
	},
});

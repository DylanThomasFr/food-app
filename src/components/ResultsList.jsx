import {View, Text, StyleSheet} from "react-native"

export default function ResultsList(props) {
    return <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
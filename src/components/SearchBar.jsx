import {View, TextInput, StyleSheet} from "react-native"
import { Feather } from "@expo/vector-icons"

export default function SearchBar(props) {
    return (
        <View style={styles.backgroundStyle} >
            <Feather
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={props.searchTerm}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
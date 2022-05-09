import {View, Text, FlatList, StyleSheet, TouchableOpacity} from "react-native"

import ResultsDetail from "./ResultsDetail"
import {withNavigation} from 'react-navigation'

export default withNavigation((props) => {
    if(!props.results.length) {
        return null
    }
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ResultShow', {
                        id: item.id
                    })}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
})

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    }
})
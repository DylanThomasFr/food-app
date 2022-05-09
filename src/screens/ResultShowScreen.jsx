import {useCallback, useEffect, useState} from "react"

import {Text, FlatList, Image, StyleSheet} from "react-native"
import yelp from "../api/yelp";

export default function ResultShowScreen(props) {
    const [result, setResult] = useState(null)
    const id = props.navigation.getParam('id')

    const getResult = useCallback(async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => getResult(id), [])

    if(!result) {
        return null
    }

    return (
        <>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={
                    ({item}) => {
                        return (
                            <Image
                                style={styles.imageStyle}
                                source={{ uri: item }}
                            />
                        )
                    }
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 250,
        width: 300
    }
})
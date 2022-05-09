import {View, Text} from "react-native"
import {useState} from "react"

import useResults from "../hooks/useResults"

import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"

export default function SearchScreen() {
    const [searchTerm, setSearchTerm] = useState('')
    const [submitHandler, results, errorMessage] = useResults()

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={() => submitHandler(searchTerm)}
            />
            {
                errorMessage ?
                    <Text>{errorMessage}</Text> :
                    <Text>We have found {results.length} results</Text>
            }
            <ResultsList title="Cost effective"/>
            <ResultsList title="Bit pricier"/>
            <ResultsList title="Big spender"/>

        </View>
    )
}
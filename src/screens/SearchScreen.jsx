import {Text, ScrollView} from "react-native"
import {useState} from "react"

import useResults from "../hooks/useResults"

import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"

export default function SearchScreen() {
    const [searchTerm, setSearchTerm] = useState('')
    const [submitHandler, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={() => submitHandler(searchTerm)}
            />
            {
                errorMessage ?
                    <Text>{errorMessage}</Text> :
                    null
            }
            <ScrollView>
                <ResultsList
                    title="Cost effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title="Bit pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title="Big spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}
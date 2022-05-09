import {useEffect, useState, useCallback} from "react"
import yelp from "../api/yelp"

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const submitHandler = useCallback(async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'oslo'
                }
            })
            setErrorMessage('')
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong !')
        }

    }, [results])

    useEffect(() => {
        submitHandler('pasta')
    }, [])

    return [
        submitHandler,
        results,
        errorMessage
    ]


}
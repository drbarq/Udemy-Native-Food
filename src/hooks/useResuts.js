import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    // console.log(getEnvVars("a"))

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'denver'
                }
            })
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMessage('Something went wrong')
        }
    }

    // bad way:
        // call searchApi when component is first rendered, creates an infinite loop
    // searchApi('pasta')

    // correct way:
        // allow the searchApi to run once and only once due to the second argument
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}
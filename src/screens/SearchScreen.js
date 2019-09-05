import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
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

    return (
        <View>
            <SearchBar 
                term={term} 
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* Conditionally render error message */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
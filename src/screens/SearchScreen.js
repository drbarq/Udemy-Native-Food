import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResuts'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = price => {
        // price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price
        })
    }
    
    console.log(results)

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
            <ResultsList 
                title="Cost Effective"
                results={filterResultsByPrice('$')}
            />
            <ResultsList 
                title="Bit Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList 
                title="Big Spender!"
                results={filterResultsByPrice('$$$')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResuts'
import ResultsList from '../components/ResultsList'


const SearchScreen = (props) => {
    console.log(props)
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = price => {
        // price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price
        })
    }
    
    // console.log(results)

    return (
        // <View style={{ flex: 1 }}>
        <>
            <SearchBar 
                term={term} 
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* Conditionally render error message */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                    navigation={props.navigation}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                    navigation={props.navigation}
                />
                <ResultsList 
                    title="Big Spender!"
                    results={filterResultsByPrice('$$$')}
                    navigation={props.navigation}
                />
            </ScrollView>
        {/* </View> */}
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
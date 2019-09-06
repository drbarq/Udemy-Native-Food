import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ( props ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={ ({item}) => {
                    return <ResultsDetail result={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10 
    }
})

export default ResultsList
import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = props => {
    // conditional logic to hide an element with no results
    if (!props.results.length) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => props.navigation.navigate('ResultsShow', { id: item.id })} 
                        >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
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

export default withNavigation(ResultsList)
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultsShowScreen = props => {
    const id = props.navigation.getParam('id')

    console.log(id)

    return (
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

const styles = StyleSheet.create({})


export default ResultsShowScreen
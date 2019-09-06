import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = props => {
    const [result, setResult]  = useState(null) 
    const id = props.navigation.getParam('id')

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    return (
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

const styles = StyleSheet.create({})


export default ResultsShowScreen
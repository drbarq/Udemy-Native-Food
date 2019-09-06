import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const ResultsDetail = props => {
    return (
        <View style={styles.container}>
            <Image 
                source={ {uri: props.result.image_url } }
                style={styles.image}
            />
            <Text style={styles.name}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },  
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail
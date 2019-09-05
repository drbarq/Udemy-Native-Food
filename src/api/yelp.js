import axios from 'axios'
import getEnvVars from '../../environment'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${getEnvVars("dev").yelpApiKey}`
    }
})




//   <Text>{ getEnvVars("dev").yelpApiKey }</Text>
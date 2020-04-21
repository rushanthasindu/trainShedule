import React, { Component } from 'react'
import { View, Text } from 'react-native'
const axios = require('axios');
class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      
        

        // Make a request for a user with a given ID
        axios.get('http://192.168.8.100:3000/train')
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        
        // Optionally the request above could also be done as
        axios.get('/user', {
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
        
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default HttpExample
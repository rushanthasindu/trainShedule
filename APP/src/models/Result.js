import React, { Component } from 'react'
import { View, Text,ScrollView,StyleSheet } from 'react-native'
const axios = require('axios');
import PresentationalComponent from '../components/Result'

class HttpExample extends Component {
   state = {
      data: []
   }
   componentDidMount = () => {
      fetch('http://192.168.8.100:3000/shedule/search', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   
   render() {
      return (
         <View style={styles.res}>
            <ScrollView >
               {
                  this.state.data.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        {/* <Text>Train Name : {item.name}</Text>
                        <Text>Train Type : {item.type}</Text>
                        <Text>Arrival Time : {item.arrival}</Text>
                        <Text>Depature Time : {item.depature}</Text> */
                        }
                         <PresentationalComponent name = {item.name} type = {item.type} arrival = {item.arrival} depature = {item.depature}/>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default HttpExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      padding: 10,
     margin:2,
      width: 500,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1',
      
   

   },
   res: {
     marginBottom:100
   

   }
})
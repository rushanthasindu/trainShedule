import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
          
          <Text style={styles.titleText}>
           Train Name :  {props.name}
         </Text>
         <Text style={styles.info}>
         Train Type :  {props.type}
         </Text>
         <Text style={styles.info}>
         Arrival Time  :  {props.arrival}
         </Text>
         <Text style={styles.info}>
         Depature Time :  {props.depature}
         </Text>
         
      </View>
   )
}
export default PresentationalComponent
const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color:'red'
    },
    info: {
        fontSize: 15,
        fontWeight: "bold"
        
      }
  });
  
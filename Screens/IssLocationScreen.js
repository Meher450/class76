import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class IssLocationScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>ISS Location</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
container:{
  backgroundColor: "Black",
  flex:1,
}
})
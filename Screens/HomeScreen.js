import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>HOME SCREEN</Text>
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
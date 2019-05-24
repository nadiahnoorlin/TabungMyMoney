import React from 'react';
import { Button, Image, View, Text, StyleSheet,  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class FirstPage extends React.Component{
  
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#7fe5f0',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,}}>
          T A B U N G
        </Text>

        <Text></Text>
        <Text></Text>

      <View styles={{padding: 50, marginTop: 50, height: 60, width: '100%', backgroundColor: 'cornsilk'}}>
        <Text style={styles.flexbox}> MyMoney</Text>
      </View>
      
       <View style={styles.coinlogo}>
      <Image source={require('../assets/coin.png')} 
      style={{width: 100, height: 100, opacity: 1.0}}/>
      </View>

      <View style={styles.logo}>
      <Image source={require('../assets/hen.png')} 
      style={{width: 150, height: 150, marginBottom: 20, opacity: 1.3}}/>
      </View>

      <View style={{backgroundColor: 'yellow'}}>
      <Button title= 'Lets get started .. ' onPress={() => {
            this.props.navigation.navigate('Home')}
      }
      />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
   flex: 1, 
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#7fe5f0',
},
flexbox: {
    width: 200,
    height: 40,
    backgroundColor: 'lightcoral',
    color : 'white',
    fontSize : 25,
    paddingRight: 30,
    paddingLeft: 40,
    borderRadius: 10,
  },
  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 10,
    marginLeft: 20
  },
  coinlogo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 15
  },
})
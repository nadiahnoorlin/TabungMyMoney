import React from 'react';
import { Button, Image, View, Text, StyleSheet, TextInput, Keyboard, } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    image: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png',
    name: '',
  };
  }

  static navigationOptions = {
    title: 'PROFILE SCREEN',
    headerStyle: {
      backgroundColor: 'mediumaquamarine',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
  
  saveProfile = () => {
    alert("Your profile shud be saved already! (supposed navigate to other page - goal)");
  };

  render() {
    let { image } = this.state;

    return (
      
      <View style={styles.container}>
        
      <Text style={{fontSize: 25, color: 'cyan'}}> PROFILE </Text>
      <Text></Text>
      <Text></Text>

      {image &&
          <Image source={{ uri: image }} style={styles.image}/>}

      <Text></Text>

        <Button
          title="SELECT A PHOTO" onPress={this._pickImage}/>
      
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

        <Text>O W N E R  of this T A B U N G ?</Text>
        <Text></Text>
          <TextInput value={this.state.name}
          onChangeText={name => this.setState({ name })}
         placeholder='Enter your name' style={styles.textInput_Style}
      underlineColorAndroid='transparent' onBlur={Keyboard.dismiss}/>

       <Text></Text>

       <View>
       <Button title="SAVE" onPress={() => {
            this.props.navigation.navigate('Setting', {
              JSON_ListView_Clicked_Item: this.state.name,
            });
          }}/>
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
},
image: {
  width: 200,
  height: 200,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
},
textInput_Style:
{
  width: '70%',
  height: 42,
  borderColor: '#009688',
  borderWidth: 3,
  color: 'black',
  //backgroundColor: 'mediumturqoise',
  textAlign:'center'
},
})
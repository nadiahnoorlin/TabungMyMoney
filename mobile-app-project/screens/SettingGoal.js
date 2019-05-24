import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Keyboard, Alert, TouchableOpacity, FlatList, } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SettingGoal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'SETTINGGOAL PAGE',
    };
  };
  static navigationOptions = {
    title: 'SETTINGGOAL SCREEN',
    headerStyle: {
      backgroundColor: 'mediumaquamarine',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    
    super(props);
 
    this.array = [{
      title: ''
    },   
    ],
 
      this.state = {
        arrayHolder: [],
        textInput_Holder: '' 
      }
  }

  joinData = () => { 
    this.array.push({title : this.state.textInput_Holder}); 
    this.setState({ arrayHolder: [...this.array] })
  }
 
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  GetItem(item) { 
    Alert.alert(item); 
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={{padding: 10, marginTop: 10, height: 60, width: '100%', backgroundColor: 'cornsilk',}}>
      <Text style={styles.TextStyle}>Hai {this.props.navigation.state.params.JSON_ListView_Clicked_Item} 
        </Text>
      </View>
        
       <TextInput
          placeholder="Enter your goal"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> Add new Goal </Text>
        </TouchableOpacity>
 
        <FlatList 
          data={this.state.arrayHolder} 
          width='100%' 
          extraData={this.state.arrayHolder} 
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => 
          <View>
          <View style={styles.listItemCont}>
          <Text style={styles.listItem} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>
          <Button title=">" onPress={() => this.props.navigation.navigate('Saving')} />
         </View>
              <View style={styles.hr} />
            </View>}
        /> 
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
  TextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'mediumaquamarine',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  }, 
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
})
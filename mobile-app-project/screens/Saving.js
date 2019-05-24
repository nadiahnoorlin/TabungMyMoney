import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, TouchableOpacity, Image,  Modal, Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Constants } from 'expo';

export default class SavingPage extends React.Component {
  static navigationOptions = {
    title: 'SAVING SCREEN',
    headerStyle: {
      backgroundColor: 'mediumaquamarine',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(){
    super();
    this.state={
      goal: '',
      saving: 0,
      duration: 0,
      isModalOpen: false,
      result: 0,
      insertCoin: 0,
      balance: 0
    }
  

    this.spinValue = new Animated.Value(0)
  }

  SettingGoal =() => {
    this.setState({result: Number(
      (this.state.saving/this.state.duration)).toFixed(2)},
     () => {
      if (this.state.saving <= 0 ){Alert.alert('Saving should NOT be RM0');}
    })
  }
  
  openModal(){
    this.setState({
      isModalOpen:true,
    })
  }

  closeModal(){
    this.setState({
      isModalOpen:false,
    })
  }

  componentDidMount () {
  this.spin()
}
spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }
  ).start(() => this.spin())
}

  reset = () => {
    this.setState({saving: 0 });
    this.setState({duration: 0});
    this.setState({result: 0});
    this.setState({balance: 0});
  }

  resetCoin = () => {
    this.setState({insertCoin: 0});
  }

  saveMoney = () => {
    this.setState({insertCoin:(Number)})
  }

  remainMoney = () => {
    this.setState({
      balance: Number((this.state.saving - this.state.insertCoin)).toFixed(2),
    })
  }
  
  render() {
    
    //const { navigate } = this.props.navigation;
    const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

    return (
      <View style={styles.container}>

        <View style={styles.plusbtn}>
          <TouchableOpacity onPress = {() => this.openModal ()}>
          <Image  
          source ={require('../assets/plussign.png')} 
          style={styles.imgplus} />
          </TouchableOpacity>
        </View>
        
        <Modal
          style={styles.modal}
          position= 'center'
          backdrop={true}
          visible ={this.state.isModalOpen}
          onRequestClose={() => this.closeModal()}
          animationType = 'slide'
        >

      <View style = {styles.backbtn}>
        <TouchableOpacity onPress = {() => {
        this.closeModal ();
        this.resetCoin();
        }}>
          <Image  
          source ={require('../assets/back.png')} 
          style={styles.imgback} />
          </TouchableOpacity>
        </View>

        <Text 
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 200
        }} > TABUNG YOUR MONEY :) </Text>

        <TextInput
          style={{
            height: 48,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1
          }}
          onChangeText={(number) => this.setState({insertCoin: number})}
          keyboardType='numeric'
          placeholder="Insert your coins"
          value={this.state.insertCoin} />

          <View style={styles.modalbtn}>
          <Button
            onPress = {() => {
              if(this.state.insertCoin == 0){
                alert("You should save your money");
                return;
                }
              this.closeModal();
              this.remainMoney();
              }}
              title="SAVE">SAVE</Button>
            </View>

            <View style={styles.greatjob}>
            <Animated.Image
              style={{
              width: 200,
              height: 200,
              transform: [{rotate: spin}] }}
              source= {require('../assets/great.png')}
            />
            </View>
        </Modal> 

      <View style={styles.savepage}>
        <Text style={styles.savingcontainer}> SAVING </Text>
      </View>
         <TextInput 
          style={{
            height: 48,
            borderBottomColor: 'black',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1

          }}
          onChangeText={(number) => this.setState({saving: number})}
          placeholder="SAVING (RM)"
          value={this.state.saving} />

        <TextInput 
          style={{
            height: 48,
            borderBottomColor: 'black',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1
            }}
            onChangeText={(number) => this.setState({duration: number})}
            placeholder="DURATION (days)"
            value={this.state.duration}/>

          <View style={styles.containerbtn}>
            <View style={styles.calculatebtn}>
            <Button 
              onPress={this.SettingGoal}
              title='CALCULATE'/>
          </View>
          
          <View style={styles.resetbtn}>
            <Button
            onPress={this.reset}
            title='RESET'/>
          </View>
        </View>
        <Text></Text>

          <View style={styles.resultcontainer}>
            <Text
              style= {{
              paddingTop: 5,
              fontFamily: 'monospace',
              fontSize: 14,
              textAlign: 'center'
            }}
            >Saving per days = RM {this.state.result}</Text>
          </View>

          <Text></Text>
          <View style={styles.balancecontainer}>
            <Text
              style= {{
              paddingTop: 5,
              fontFamily: 'monospace',
              fontSize: 14,
              textAlign: 'center'
            }}
            >Remaining money to be save = RM {this.state.balance}</Text>
          </View>  

        <View style={styles.logocoin}>
        <Image
          source = {require('../assets/coin.png')} 
          style={styles.coinsize}/>
      </View>

        <View style={styles.logo}>
        <Image
          source = {require('../assets/hen.png')} 
          style={styles.logosize}/>
      </View> 
      </View>       
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: '1',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#7FE5F0',
    padding: 8,
  },

  plusbtn:{
    alignItems:'flex-end'

  },
  imgplus:{
    flexDirection: 'column',
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: 10
  },

  modal:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    height: 200

  },

  backbtn:{
    flexDirection: 'row',
    paddingTop: 30,
    marginLeft: 20,
    alignSelf: 'flex-start'
  },

  imgback:{
    width: 30,
    height: 30
  },  

  modalbtn:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 5,
    marginLeft: 120,
    height: 50,
    width:150,
    textAlign: 'center',
    borderRadius: 6,
    backgroundColor: '#F9F1F0'
  },

  greatjob:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  savepage:{
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#EF7C8E',

  },

  savingcontainer:{
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  containerbtn:{
    flexDirection: 'row'
  },

  calculatebtn:{
    padding: 8,
    width: 150,
    marginLeft: 10,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    backgroundColor: '#E4E5E8',
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: 'center',
    fontWeight: 'bold'


  },

  resetbtn:{
    fontSize: 18, 
    padding: 8,
    width: 150,
    marginLeft: 40,
    marginRight: 10,
    height: 50,
    alignSelf:'flex-start',
    borderRadius: 6,
    backgroundColor: '#E4E5E8'
  },

  resultcontainer:{
    padding: 8,
    width: 300,
    marginTop: 10,
    marginLeft: 30,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFF4BD',
  },

  balancecontainer:{
    padding: 8,
    width: 300,
    marginTop: 5,
    marginLeft: 30,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFF4BD',
  },

  logocoin:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 0,
    marginLeft: 30
  },

  coinsize:{
    width: 50,
    height: 50,
    opacity: 0.7
  },

  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20

  },

  logosize:{
    width: 100,
    height: 100,
    opacity: 0.7
  }
});
import React, { Component } from "react";
import { StyleSheet, } from 'react-native';

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
    //width: screen.width - 80,
    height: 200

  },

  modalbtn:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 15,
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
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#FFF4BD',
  },

  balancecontainer:{
    padding: 8,
    width: 300,
    marginTop: 5,
    marginLeft: 30,
    height: 40,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
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
    width: 150,
    height: 150,
    opacity: 0.7
  }
});
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 300,
  height: 300,
  /*Adicione o raio da borda esquerda (left) e direita (right) da parte superior e inferior*/
  borderTopLeftRadius:20,
  borderToprigthtRadius:20,
 /*Adicione a fonte Times New Roman*/  
 borderBottomLeftRadius: 20,
   fontFamily:"Segoe UI Emoji",
    /*Adicione shadowColor (cor da sombra)*/
    shadowcolor:"black",
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>FELIZ ANIVERSÁRIO MEU AMIGO :)</Text>
  
    );
  }
}



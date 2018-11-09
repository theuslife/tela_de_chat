import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import { MsgItem } from './src/MsgItem'

export default class App extends Component {

  constructor(props){

    super(props);
      this.state = {
        chat: [
          {key: '1', name:'Laura', msg: 'Oi', m: false },
          {key: '2', name:'Matheus', msg: 'Tudo bom Laura?', m: true },
          {key: '3', name:'Laura', msg: 'Tudo ótimo, Matheus. Viu as notificações novas?', m: false },
          {key: '4', name:'Matheus', msg: 'Sim, estava excelentes. Ainda estou avaliando o restante', m: true },
          {key: '5', name:'Laura', msg: 'Tudo bem, eu tenho que sair para ver sobre os papeis do marketing', m: false },
          {key: '6', name:'Matheus', msg: 'Okay, abraços Laura!', m: true },
          {key: '7', name:'Laura', msg: 'Bjs!', m: false },
          {key: '8', name:'Laura', msg: 'Até mais', m: false }
        ]
      }

  }

  render() {
    return (
        <ImageBackground source={require('./assets/bg.jpg')} style={styles.chat}>
            <FlatList data={this.state.chat} renderItem={({item}) => <MsgItem data={item} />} />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chat: {
    flex: 1
  }
});

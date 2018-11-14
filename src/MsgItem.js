import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

export class MsgItem extends Component {

    constructor(props){
        super(props);
        this.state = {

        }

        this.dinamicStyle = styles.containerLeft;
        if(this.props.data.m){
            this.dinamicStyle = styles.containerRight;
        } 

    }

    render(){
        return(
            <View style={[styles.container, this.dinamicStyle]} >
                <Text style={styles.name}>{this.props.data.name}</Text>
                <Text>{this.props.data.msg}</Text>
            </View>
        )
    }

} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerLeft: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        marginRight: 50

    },
    containerRight: {
        backgroundColor: '#00ff00',
        alignSelf: 'flex-end',
        marginLeft: 50
    }
})
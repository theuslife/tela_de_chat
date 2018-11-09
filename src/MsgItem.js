import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

export class MsgItem extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container} >
                <Text>{this.props.data.msg}</Text>
            </View>
        )
    }

} 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 20,
    },
    

})
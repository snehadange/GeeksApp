import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';


export default class ComponeyInfo extends React.Component {
    state = {
        name: 'Geeksynergy Technologies Pvt Ltd',
        Address: 'Sanjayanagar, Bengaluru-56',
        number: 123456789,
        email: 'snehadange2@gmail.com'
    }
    render() {
        return (
            <View style={styles.container}>



               <Text style={{fontSize:20,fontWeight:'bold',top:-20}}>ComponeyInfo</Text>

                <Text><Text style={{ fontWeight: 'bold',fontSize:20 }}>Componey:</Text>{this.state.name}</Text>
                <Text><Text style={{ fontWeight: 'bold' ,left:30,fontSize:20 }}>Address:</Text>{this.state.Address}</Text>

                <TouchableOpacity onPress={() => Linking.openURL('tel://+123456789')}>
                    <Text><Text style={{ fontWeight: 'bold',fontSize:20  }}>Phone:</Text>{this.state.number}</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => Linking.openURL('mailto:snehadange2@gmail.com?subject=&body=')}>
                    <Text><Text style={{ fontWeight: 'bold',fontSize:20 }}>Email:</Text><Text style={{color:'blue'}}>{this.state.email}</Text></Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold'
    }
})
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage, Button, Picker } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            phoneno: "",
            profession: "",
            selectedValue: "",
            
        }
    }

    register = () => {
        let userInfo = []
        if (this.state.name == '') {
            alert("Name is required")

        } else if (this.state.number == '') {
            alert("Phone number is required")
        } else if (this.state.email == '') {
            alert("Email is required")
        }
        else {
            userInfo.push({
            username: this.state.name,
            useremail: this.state.email,
            userpassword: this.state.password,
            usernumber: this.state.phoneno,
            userprofession: this.state.profession
        })

        alert("Register successfull")
        this.props.navigation.navigate('Login', {
            data: userInfo
        })
        }
        
    }

    render() {

        return (
            <View style={Styles.container}>
                <Text style={{ top: -50, fontWeight: 'bold', fontSize: 20 }}>Register Screen</Text>

                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    disableFullscreenUI={true}
                    value={this.state.name}
                   
                    onChangeText={(text) => this.setState({ name: text })}
                />





                <TextInput
                    style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" Email-id"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    disableFullscreenUI={true}
                    value={this.state.email}
                    //onEndEditing={() => this.validator('email')}
                    onChangeText={(text) => this.setState({ email: text })}
                />



                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" mobile number"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    disableFullscreenUI={true}
                    maxLength={10}
                    value={this.state.phoneno}
                    keyboardType='numeric'
                   
                    onChangeText={(text) => this.setState({ phoneno: text })}
                />



                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" Enter  Password"
                    placeholderTextColor="black"
                    
                    autoCapitalize="none"
                    value={this.state.password}
                    disableFullscreenUI={true}
                   
                    onChangeText={(text) => this.setState({ password: text })}
                />

                <Picker
                    selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 250, top: 10 }}
                    placeholder="choose profession"
                    onValueChange={(text) => this.setState({ selectedValue: text })}>
                    <Picker.Item label="Choose profession" />
                    <Picker.Item label="Software Developer" value="Software Developer" />
                    <Picker.Item label="Mechanical Engineer" value="Mechanical Engineer" />
                </Picker>

                <TouchableOpacity style={Styles.Button} onPress={this.register}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>



            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {

        width: 250,
        height: 50,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        borderWidth: 1,
        color: 'black',
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.4,
        borderRadius: 25,

    },

    Button: {
        top: 20,
        backgroundColor: '#3399FF',
        paddingLeft: 90,
        paddingTop: 10,

        width: 250,
        height: 50,
        borderRadius: 25
    }
})
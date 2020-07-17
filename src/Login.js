import React from 'react';
import { View, Text ,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: "",
            userpassword: "",
            register_data:''

        }
    }

    submit=()=>{
        
          let  register_data=this.props.route.params.data
        
          register_data.map((x)=>
          
           {
               
               if(x.username === this.state.username && x.userpassword === this.state.userpassword)
               {
                   alert("Login Successfull")
                  this.props.navigation.navigate('Home')
               }else{
                   alert("Invalid Login..")
               }
           }
           
           ) 

        
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={{top:-50,fontWeight:'bold',fontSize:20}}>Login Screen</Text>

                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    disableFullscreenUI={true}
                    value={this.state.username}
                // onEndEditing={() => this.validator('name')}
                    onChangeText={(text) => this.setState({ username: text })}
                />


             




              
                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" confirm Password"
                    placeholderTextColor="black"
                   // secureTextEntry={this.state.showPassword}
                    autoCapitalize="none"
                    value={this.state.userpassword}
                    disableFullscreenUI={true}
                   // onEndEditing={() => this.validator('password')}
                    onChangeText={(text) => this.setState({ userpassword: text })}
                />



               <TouchableOpacity style={Styles.Button} onPress={this.submit}>
                   <Text style={{fontSize:20,fontWeight:'bold'}}>Login</Text>
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
        paddingLeft: 40,
        borderWidth: 1,
        color: 'black',
        marginTop:10,
        backgroundColor: 'white',
        opacity: 0.4,
        borderRadius: 25,
        
    },

    Button:{
          top: 20,
         backgroundColor: '#3399FF',
         paddingLeft:90,
         paddingTop:10,
        
          width: 250, 
          height: 50, 
          borderRadius: 25 
    }
})
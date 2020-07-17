import React from 'react';
import {View,StatusBar,Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer,DrawerActions} from '@react-navigation/native';
import { FontAwesome } from 'react-native-vector-icons';
import Register from './src/Register';
import Login from './src/Login';
import Home from './src/Home';
import  ComponeyInfo from './src/Menu/ComponeyInfo'
import  Hoblist from './src/Menu/Hoblist'

const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()

function StackScreen({navigation}){
  
  return (
    
  
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyDrawer} />
      
      </Stack.Navigator>  
       
    );
}

function MyDrawer({navigation}) { 
  return (
 <View style={{ flex: 1, top: 30}}>
  <StatusBar barStyle="dark-content" backgroundColor="blue" />
  <View style={{flexDirection:'row',top:-10,left:10}}>
     <FontAwesome name="bars"  size={20} 
          onPress={() =>navigation.dispatch(DrawerActions.openDrawer())} />
   </View>
    
 
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ComponeyInfo" component={ComponeyInfo} />
      <Drawer.Screen name="Hoblist" component={Hoblist} />
    </Drawer.Navigator>
     </View>
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  );
}
import React from "react";
import Login from './Pages/Login/index'
import Home from './Pages/Home'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loader from "./components/Loader";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Stack = createNativeStackNavigator();

export default () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {/* <Tab.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown:false
          }}
          /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Login />
  );
}

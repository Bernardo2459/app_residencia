import React from "react";
import Login from './Pages/Login/index'
import Home from './Pages/Home'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from "./Context/DataContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} 
          options={{title: "Home Screen " , headerStyle:{backgroundColor: '#54b695'}
            }} />
          <Stack.Screen name="Login" component={Login} 
          options={{title: " " , headerStyle:{backgroundColor: '#54b695'}
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
    
    // <Login />
  );
}
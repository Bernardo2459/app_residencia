import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

// import { styles } from './style';



const Home = () =>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: 'black'}}>Home Screen</Text>
          <Button
            title="Go to Details"
            // onPress={() => navigation.navigate('Details')}
          />
        </View>
        
      );
}

export default Home
import React, { useEffect, useState, } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native';

import { styles } from './style';

const Login =  ({navigation}) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const Stack = createNativeStackNavigator();

  const handleLogin = async () =>{
    console.log(`Email: ${email} - Senha: ${senha}`)
    
    try{
      const retorno = await AxiosInstance.post('/auth/login', {
        email:email,
        password:senha
      })


      if(retorno.status === 200){
        console.log('Retorno: ' + JSON.stringify(retorno.data) )
        navigation.navigate('Home')
        
      }else{
        console.log('Erro ao relaizar a autentificação')
      }

    } catch (error){
      console.log('Erro ao realizar a autentificação -' + JSON.stringify(error))
    }
  }

  // useEffect(() =>{
  //   console.log("Component renderizado")
  // },[])

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem-Vindo</Text>
      </View>

      <View style={styles.conteudo}>

        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder='E-mail' />
        <TextInput style={styles.input} onChangeText={setSenha} value={senha} placeholder='Senha' secureTextEntry={true} />

      </View>

      <View style={styles.rodape}>
      <ActivityIndicator
          size="large"
          color={"blue"}
          animating={true}
          style={{alignSelf:'center', 
          justifyContent:'center', 
          position:'absolute'}}
          />
          <TouchableOpacity style={styles.botao} onPress={() => handleLogin()}>
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
};

// setTimeout( 
//   <ActivityIndicator
//   size="large"
//   color={"blue"}
//   animating={true}
//   style={{alignSelf:'center', 
//   justifyContent:'center', 
//   position:'absolute'}}
//   />
// , 10000);

export default Login;
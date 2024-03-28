import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image } from 'react-native';
import { styles } from './style';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar backgroundColor='#61dafb' barStyle="dark-content" /> 
      <Image style={styles.imagens}
      source={require('./assets/astro.jpg')}
      />
      <Text style={styles.texto} >Esse é um pequeno passo para o homem, mas um gigantesco salto para humanidade</Text>
    </View>
  );
}


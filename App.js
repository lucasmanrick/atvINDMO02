import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center'
  }
});
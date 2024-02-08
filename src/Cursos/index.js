import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.TitleCourse]}>Desenvolvimento de Sistemas</Text>
            <Text style={styles.textColor}>Neste curso será orientado ao aluno a como se desenvolver sistemas web e mobile usando linguagens de programação e suas variações como JavaScript,ReactNative...</Text>
        </View>
        <View>
            <Text style={styles.TitleCourse}>Excel Avançado</Text>
            <Text style={styles.textColor}>Neste curso será passado Excel avançado, é o curso ideal para alunos que ja possuem o Excel intermediario e quer dar um passo maior em sua carreira...</Text>
        </View>
        <View>
            <Text style={styles.TitleCourse}>Mecanica Automotiva</Text>
            <Text style={styles.textColor}>Neste curso será disciplinado a matéria de mecanica automotiva para apaixonados por veiculos e pela parte mecanica, sendo assim lecionado desde o basico ao avançado para uso no meio industrial...</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center', 
    backgroundColor:"white",
    gap:15
  },
  TitleCourse: {
    fontSize:30,
    color:'#FF0000'
  },
  textColor: {
    color: '#474a51'
  }
});
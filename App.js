import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import Position from './components/Position';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:200,
    marginLeft:8,
    marginRight:8,
    backgroundColor: '#AEC1BB',
    borderWidth: 5,
    borderColor: '#869691'

  },
  heading: {
    fontSize:24,
    marginBottom:16,
    color:'#626664',


  }
});

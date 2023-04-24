import React, {useState} from 'react'
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
 } from 'react-native';
import ModalResultado from './src/components/Modal'


export default function App() {

  const [valorAlcool, setValorAlcool] = useState('')
  const [valorGasolina, setValorGasolina] = useState('')
  const [modalVisible, setModalVisible] = useState(false) 
  const [resultado, setResultado] = useState(0)


  function Escolha(alcool1, gasolina1, result1){

    if(valorAlcool === '' || valorGasolina === ''){
      alert('Por valor Digite um valor correto!')
      return
    }

    let alcool = parseFloat(valorAlcool)
    let gasolina = parseFloat(valorGasolina)
    let result = (alcool / gasolina).toFixed(2)
    
    console.log(result)
    if(result === 0){
      setResultado('Voce está a pé')
    }
    else if(result > 0.7){      
      setResultado('Compensa usar Gasolina')
    }else{
      setResultado('Compensa usar Álcool')
    } 
    setResultado(result)
    setValorAlcool('')
    setValorGasolina('')    
    
  }

  function abrilModal(){
    setModalVisible(true)
  }

  function sairModal(){
    setModalVisible(false)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.logo}
          source={require('./src/image/logo.png')}
        />
      </View>

      <Text style={styles.titulo}>Qual melhor opção?</Text>

      <View style={styles.areaForm}>
        <Text style={styles.text}>Ácool (preço por litro)</Text>
        <TextInput style={styles.input}
        placeholder='Digite o valor do álcool'
        value={valorAlcool}
        onChangeText={ (valor) => setValorAlcool(valor)}
        keyboardType='numeric'
        />

        <Text style={styles.text}>Gasolina (preço por litro)</Text>

        <TextInput style={styles.input}
        placeholder='Digite o valor da gasolina'
        value={valorGasolina}
        onChangeText={ (valor) => setValorGasolina(valor)}
        keyboardType='numeric'
        />                
      </View>

      <TouchableOpacity style={styles.btn} onPress={abrilModal}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 30, color:'#FFF', marginTop: 20, textAlign: 'center'}}>{resultado}</Text>


      <ModalResultado
        style={styles.modal}
        visible={modalVisible}
        transparent={false}
        escolha={Escolha(valorAlcool, valorGasolina, resultado)}
        alcool={valorAlcool}     
        gasolina={valorGasolina}
        result={resultado}
        fechar={sairModal}
      />
          
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',       
  },
  img:{
    alignItems: 'center'
  },
  logo:{
    marginTop: 100,    
  },
  titulo:{
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
    marginBottom: 40
  },
  areaForm:{
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    width: '95%',    
  },
  input:{
    borderRadius: 4,
    backgroundColor: '#FFF',
    color: '#000000',
    height: 50,
    padding: 10,
    marginBottom: 5,
    marginTop: 10,    
    fontSize: 20,
    fontWeight: '500'
  },
  text:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 15
  },
  btn:{
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#FF0000',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  btnText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'    
  },
  modal:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  textModal:{
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold'
  }
});

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

export default function ModalResultado(props){
    return(
        <Modal             
            animationType='slide'
            >
            <View style={styles.modal}>

            <View style={styles.header}>
                <Image
                    source={require('../image/gas.png')}
                />
                {console.log(props.result)}
                <Text  style={styles.title}>{props.result}</Text>                
            </View>

            <View style={styles.resultArea}>
                <Text style={styles.titleResult} >Com os preços:</Text>
                <Text style={styles.result}>Álcool: R$ {props.alcool}</Text>
                <Text style={styles.result}>Gasolina: R$ {props.gasolina}</Text>
            </View>
                <TouchableOpacity
                    style={styles.btnArea}
                    onPress={props.fechar}                    
                >
                    <Text style={styles.btnText}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        alignItems:'center',
        width:'90%'
      },
      title:{
        fontSize:30,
        color:'#30ef5a',
        fontWeight:'bold',
        marginTop:15
      },
      resultArea:{
        marginTop:30,
        marginBottom:30,
        alignItems:'center'
      },
      titleResult:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
      },
      result:{
        color:'#fff',
        fontSize:20,
        marginTop:8
      },
      btnArea:{
        borderWidth:1,
        borderColor:'#ef4130',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        width:'90%'
      },
      btnText:{
        color:'#ef4130',
        fontSize:25,
    
      }
  });
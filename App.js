import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };
    // Variável do Timer do relógio
    this.timer = null;
    
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if (this.timer != null){
      //Aqui para o Timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'});
    }else{
      //Começa a girar o Timer
      this.timer = setInterval(() =>{
        this.setState({numero: this.state.numero + 0.01})
      }, 10);

      this.setState({botao: 'PAUSA'});
    }
  }

  limpar(){
    if(this.timer != null){
      //Aqui ZERAR o Timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero, 
      numero: 0, 
      botao:'VAI'})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Cronômetro</Text>
        
        <Image style={styles.img} source={require('./img/cronometro.png')} />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>


        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.last}>
          <Text style={styles.lastTexto}>
            {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's' : '' }
          </Text>
        </View>

      </View>
    );
  }
}

  // ESTILOS PARA APLICAR
  const styles = StyleSheet.create({
    container: {
      flex:1 ,
      alignItems:'center',
      backgroundColor:696969,
      justifyContent: 'center',

    },

    titulo:{
      textAlign:"center",
      fontSize:46,
      paddingTop:30,
      paddingBottom:50,
      color:'#fff',
      fontWeight:'bold', 
    },

    img:{
      paddingBottom:150,
      height: 380,
      width:300,
    },

    timer:{
      marginTop:-210,
      color:'#fff',
      fontSize:55,
      fontWeight:'bold',
    },

    btnArea:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:80,
      height:130,
    },

    btn:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#fff',
      height:40,
      margin: 15,
      borderRadius:9,
    },

    btnTexto:{
      fontSize:20,
      color:696969,
      fontWeight:'bold',
    },

    last:{
      alignItems:'center',
    },

    lastTexto:{
      textAlign:'center',
      fontSize:15,
      color:'#fff',
    },

  });


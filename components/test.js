import React, { Component } from 'react';
import UselessTextInput from './TextInput'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Constants from 'expo-constants'
import { Icon, Button} from "native-base";



export default class Tests extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, name: "", DataInit: ["Андрей", "Петя", "Вася", "Коля"], id: 0, };
  }

  updateData = (value) => {
    this.setState({ name: value })
  }

  render() {
    if(this.state.count == 1){
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View>
              <View style={styles1.header}>
                <Text style={styles1.color1}>Вход в личный кабинет</Text>
              </View>
              <View style={styles1.text1}>
                <Text style={styles1.color2}> Вход </Text>
                <Text style={styles1.color3}> Первое это то, что тут две фигурные скобки. То, что мы рендирим — написано на JSX и для JS выражений, которые будут использоваться в JSX, они должны быть вставлены в фигурные скобки.
                </Text>
              </View>
              <UselessTextInput updateData = {this.updateData} placeee="Логин"></UselessTextInput>
              <UselessTextInput placeee="Пароль"></UselessTextInput>
              <View >
                  <Button block danger style = { {backgroundColor:"red", margin: 50}} onPress={()=>{this.setState({count: 2 })} } >
                    <Text> Вход </Text>
                  </Button>
              </View>
            </View>
          </ScrollView>
      </SafeAreaView>
      );
    }
    if(this.state.count==2){
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View>
              <View style={styles1.header}>
                <Text style={styles1.color1}>Список                                       {this.state.name} 
                  <Icon  style={{ color:"white"}}name='people'></Icon>
                </Text>
              </View> 
              <Button block light style = { {backgroundColor:"white", margin: 10}} onPress={()=>{this.setState({count: 3, id: 0 })} }>
                <Text>{this.state.DataInit[0]}</Text>
              </Button>
              <Button block light style = { {backgroundColor:"white", margin: 10}} onPress={()=>{this.setState({count: 3, id: 1 })} }>
                <Text>{this.state.DataInit[1]}</Text>
              </Button>
              <Button block light style = { {backgroundColor:"white", margin: 10}} onPress={()=>{this.setState({count: 3, id: 2 })} }>
                <Text>{this.state.DataInit[2]}</Text>
              </Button>
              <Button block light style = { {backgroundColor:"white", margin: 10}} onPress={()=>{this.setState({count: 3, id: 3 })} }>
                <Text>{this.state.DataInit[3]}</Text>
              </Button>
            </View>
          </ScrollView>
      </SafeAreaView>
      );
    }
    if (this.state.count == 3){
      return (
          <View style={{ flexDirection: 'column', flex: 1,}}>
            <View style={styles1.header}>
              <Button transparent danger style = { {backgroundColor:"red", margin: 30}} onPress={()=>{this.setState({count: 2 })}}>
              <Icon style = { {color:"white"}} name='arrow-back'/>
                <Text style = { {color:"white", fontSize: 20}} >График</Text>
              </Button>
            </View>
            <View style={{ flexDirection: 'column', flex: 1,}}>
              <Text style={{left: 40, top:40, textAlign: "left", fontSize: 20, fontWeight: "bold"}}>
                {this.state.DataInit[this.state.id]}
              </Text>
              <Text style={{left: 5, top:60, textAlign: "left", fontSize: 15}}>
                Первые фигурные скобки вставляют JavaScript в JSX. Внутренние фигурные скобки создают объект литерал. Стили передаются как объект литералы к элементу.
                JSX это препроцессорный шаг, который добавляет XML синтаксис JavaScript. Вы можете использовать React и без JSX, но JSX делает работу с React куда более элегантной. Как и XML, JSX теги имеют имена, атрибуты и потомков.
                Следующее, на что нужно обратить внимание, это то, что свойства разделяются запятой. Это так, потому что то, что мы передаем это по-факту объект. А так как это атрибут JavaScript, атрибуты пишутся горбатым регистром и не разделяются тире.
              </Text>
            </View>
            <View style={{top:248, flex: 1, alignSelf: "flex-end", spaceBetween: "flex-end", justifyContent: 'flex-end', alignItems:'flex-end'}}>
              <View style={{flex: 1, flexDirection: 'row' }}>
                <Button bordered danger style = { { alignSelf:'stretch', backgroundColor:"white", padding: 80,}} onPress={()=>{this.setState({count: 2 })}}>
                  <Text>Назад</Text>
                </Button>
                <Button danger style = { { alignSelf:'stretch', backgroundColor:"red", padding: 45,}} onPress={()=>{this.setState({count: 1, name: "" })}}>
                  <Text>Выйти из аккаунта</Text>
                </Button>
              </View>
            </View>
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
},
scrollView: {
  backgroundColor: 'white',
},
});

const styles1 = StyleSheet.create({
header:{
  backgroundColor:"red",
  height: 100,
},
color1:{
  top:50,
  left:30,
  textAlign: "left",
  color: "white",
  fontSize: 20,
},
color2:{    
  top:50,
  textAlign: "center",
  color: "red",
  fontSize: 50,
  fontWeight: "bold",
},
color3:{
  top:50,
  textAlign: "center",
  fontSize: 15,
},
text1:{
  height: 300,
},
})
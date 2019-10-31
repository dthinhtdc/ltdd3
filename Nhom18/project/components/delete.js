import React, { Component } from 'react';
import { Text, TextInput, View, Alert, Button, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
//import { Button } from 'react-native-elements';

export default class PizzaTranslator extends Component {
//   dangky(tkhoan,mkhau)
//   {
//     fetch('http://10.0.3.2/QLNV/register.php',{method:"POST", body:JSON.stringify({TK: tkhoan,MK: mkhau})})
//     .then((response)=> response.text())
//     .then((responseData) =>{
//       alert("Ðang Ký Thành Công")
//     })
//     .done()
//   }
//   constructor(props) {
//     super(props);
//     this.state = {taikhoan: '',
//                   matkhau:''};
//     }

constructor(props) {
    super(props);

    this.state = {
      // id: props.navigation.getParam('id', 'NO-ID'),
      // MaPB: props.navigation.getParam('MaPB', 'NO-NAME'),

      // TenPB: props.navigation.getParam('TenPB', 'NoName'),
      mapb: '',
      tenpb:'',
  
      ActivityIndicator_Loading: false,
    };
  }

  Sua = (mapb,tenpb) => {
    const {params} = this.props.navigation.state;
  
    fetch('http://192.168.1.14/TEST/update.php',{method:"POST", body:JSON.stringify({id: params.id,Ma: mapb,Ten: tenpb})})
    .then((response)=> response.text())
    .then((responseData) =>{
      alert("Da nhap Thanh Cong")
    })
    .done()
  };



  Xoa = () => {
    const {params} = this.props.navigation.state;
    Alert.alert(
        'Alert',
        'Are you sure you want to delete?',
        [
        {
            text: 'No',
            onPress: () => console.log('Cancel pressed'),
            style: 'cancel',
        },
        {
            text: 'Yes',
            onPress: () => {
            fetch('http://10.0.3.2/TEST/delete.php', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: params.id
                }),
            })
                .then(response => response.json())
                .then(responseJsonFromServer => {
                alert(responseJsonFromServer);
                this.setState({ActivityIndicator_Loading: false});
                this.props.navigation.goBack();
                })
                .catch(error => {
                console.error(error);
                });
            },
        },
        ],
        {cancelable: true},
    );
    };
  

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View >
        <Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Thông tin phòng ban</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}>
               Mã PB: </Text>
       
        {/* <TextInput 
            // placeholder={this.state.MaPB}
            // placeholderTextColor="#000000"
            // style={styles.TextInputStyle}
            // underlineColorAndroid="transparent"
            // onChangeText={(TextInputText) => {this.setState({MaPB: TextInputText})}}
            //value ={this.state.ma} 
            placeholder={this.state.MaPB}														
            style={styles.TextInputStyle}
            placeholderTextColor="#000000"
            underlineColorAndroid="transparent"
            onChangeText={TextInputText => {
              this.setState({MaPB: TextInputText});
            }}
        /> */}
          <TextInput
            placeholder={params.ma}
            placeholderTextColor="#000000"
            style={styles.TextInputStyle}
            underlineColorAndroid="transparent"
            onChangeText={(TextInput) => this.setState({mapb: TextInput})}
            value ={this.state.mapb}
        ></TextInput>
       
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Tên PB:  </Text>
      {/* <TextInput 
        placeholder={this.state.TenPB}
        placeholderTextColor="#000000"
        style={styles.TextInputStyle}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        onSubmitEditing={() => this.refs.txtPassword.focus()}
        onChangeText={(TextInputText) => {
          this.setState({TenPB: TextInputText})}}
        //value ={this.state.ma}
      /> */}
      <TextInput
            placeholder={params.ten}
            placeholderTextColor="#000000"
            style={styles.TextInputStyle}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({tenpb: text})}
            value ={this.state.tenpb}
        ></TextInput>
        
      </View>

       <TouchableOpacity
          activeOpacity={0.5}
          style={styles.UpdateButtonStyle}
          onPress={() =>  this.Sua(this.state.mapb,this.state.tenpb)}>
          <Text style={styles.TextStyle}>Ch?nh s?a</Text>
        </TouchableOpacity>  


     <TouchableOpacity
          activeOpacity={0.5}
          style={styles.DeleteButtonStyle}
          onPress={this.Xoa}>
          <Text style={styles.TextStyle}>Delete</Text>
        </TouchableOpacity>

        
      {this.state.ActivityIndicator_Loading ? (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}


      </View>
    );
  }
}






const styles = StyleSheet.create({
    // MainContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   margin: 20,
    // },
  
    TextInputStyle: {
        textAlign: 'center',
        backgroundColor: 'white', 
        borderTopLeftRadius:10, 
        borderBottomRightRadius: 10 , 
        borderWidth: 1,
        borderColor: '#009688',
        height : 40,
        fontSize : 16,
        color:'#000000',
        width :200,
        margin : 10
    },
  
    UpdateButtonStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#009688',
      marginBottom: 20,
      marginLeft: 100,
      width: '50%',
    },
  
    DeleteButtonStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'red',
      marginBottom: 20,
      marginLeft: 100,
      width: '50%',
    },
  
    TextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
    },
  
    ActivityIndicatorStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
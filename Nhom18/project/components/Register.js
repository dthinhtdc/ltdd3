import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

export default class RegisterUser extends Component {
   UserRegistrationFunction(UserName, UserEmail, UserPassword) {
      fetch('http://192.168.1.14/react_native_ShoppingOnline/register.php', { method: "POST", body: JSON.stringify({ name: UserName, email: UserEmail, password: UserPassword }) })
         .then((response) => response.text())
         .then(() => {
            alert("Đăng kí thành công")
         })
         .done()
   }
   constructor(props) {
      super(props)
      this.state = {
         UserName: '',
         UserEmail: '',
         UserPassword: ''
      }
   }

   render() {
      return (

         <View style={styles.MainContainer}>

            <Text style={{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

            <TextInput

               // Adding hint in Text Input using Place holder.
               placeholder="Enter User Name"

               // Making the Under line Transparent.
               underlineColorAndroid='transparent'

               style={styles.TextInputStyleClass}
               onChangeText={(text) => this.setState({ UserName: text })}
               value={this.state.UserName}
            />

            <TextInput

               // Adding hint in Text Input using Place holder.
               placeholder="Enter User Email"

               // Making the Under line Transparent.
               underlineColorAndroid='transparent'

               style={styles.TextInputStyleClass}
               onChangeText={(text) => this.setState({ UserEmail: text })}
               value={this.state.UserEmail}
            />

            <TextInput

               // Adding hint in Text Input using Place holder.
               placeholder="Enter User Password"

               // Making the Under line Transparent.
               underlineColorAndroid='transparent'

               style={styles.TextInputStyleClass}

               secureTextEntry={true}

               onChangeText={(text) => this.setState({ UserPassword: text })}
               value={this.state.UserPassword}
            />

            <Button title="Click Here To Register" color="#2196F3"
               onPress={() => this.UserRegistrationFunction(this.state.UserName, this.state.UserEmail, this.state.UserPassword)} />
         </View>
      );
   }
}
const styles = StyleSheet.create({

   MainContainer: {

      justifyContent: 'center',
      flex: 1,
      margin: 10
   },

   TextInputStyleClass: {

      textAlign: 'center',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      // Set border Hex Color Code Here.
      borderColor: '#2196F3',

      // Set border Radius.
      // borderRadius: 5,

      // Set border Radius.
      borderRadius: 10,
   }

})
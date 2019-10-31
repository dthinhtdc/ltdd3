import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Image, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import background from '../images/wallpaper.png'
import logo from '../images/logo.png'
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: "",
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }
  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Shopping Online</Text>
        </View>
        <View>
          <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'UserName'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          ></TextInput>
        </View>
        <View>
          <Icon name={'ios-lock'} size={30} color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'PassWord'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          ></TextInput>
          <TouchableOpacity style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => this.login()} >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground >
    )
  }

  login() {
    const { navigate } = this.props.navigation;
    fetch('http://192.168.1.14/react_native_ShoppingOnline/login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == "true") {
          navigate('phongban', { email: 'Jane' });
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 120,
    height: 120
  },
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 70
  },
  logoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    marginVertical: 10,
    height: 45,
    borderRadius: 20,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 40
  },
  btnEye: {
    position: 'absolute',
    top: 19,
    right: 40
  },
  btnLogin: {
    width: WIDTH - 55,
    marginVertical: 10,
    borderRadius: 20,
    height: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
})


import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import SanPham from './SanPham';
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://172.16.11.49:80/QLhoa/Select_SanPham.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:10}}>
        <View style={{marginLeft: 100, padding: 20}}>
            <Text style={{color:'green', fontWeight: 'bold'}}>
              DANH SÁCH LOẠI HOA
            </Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <SanPham maSP={item.masp} tenSP={item.tensp} giaSP={item.giasp}img={item.hinhanh}/>}
         
        />
      </View>
    );
  }
}

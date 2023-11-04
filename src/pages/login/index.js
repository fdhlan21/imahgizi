import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import { ImahGiziCirle } from '../../assets/img'

export default function LoginScreen({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.primary, }}>
    <ScrollView>
     <View style={{padding:10}}>

        <View style={{alignItems:'center', marginTop:'10%'}}>
            <Image style={{width:210, height:200}} source={ImahGiziCirle}/>
        </View>

        <View style={{padding:10, backgroundColor:'white', borderRadius:5, marginTop:50,}}>

        <Text style={{fontFamily:"Poppins-SemiBold", marginBottom:5, left: 2}}>Username</Text>
        <TextInput style={{backgroundColor:'#f5f5f5', borderWidth:1, borderRadius:5, height:40, color:"black", fontFamily:'Poppins-Regular',
        fontSize:12, paddingRight:10, paddingLeft:10, marginBottom:20,}} placeholder='Username' placeholderTextColor='black'/>

        
        <Text style={{fontFamily:"Poppins-SemiBold", marginBottom:5, left: 2}}>Password</Text>
        <TextInput style={{backgroundColor:'#f5f5f5', borderWidth:1, borderRadius:5, height:40, color:"black", fontFamily:'Poppins-Regular',
        fontSize:12, paddingRight:10, paddingLeft:10, }} placeholder='Password' placeholderTextColor='black' secureTextEntry={true}/>


        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{padding:10, backgroundColor:colors.primary, borderRadius:5, marginTop:20}}>
            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:15, textAlign:'center', color:"white"}}>
                Login
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding:10, borderRadius:5, marginTop:5}}>
            <Text style={{fontFamily:"Poppins-Medium", fontSize:12, textAlign:'center', color:"black"}}>
                Belum mempunyai akun? yuk daftar!
            </Text>
        </TouchableOpacity>

        


        </View>

     </View>
    </ScrollView>
    </View>
  )
}
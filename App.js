// Imports
import React from 'react';
import { StyleSheet, FlatList,TouchableOpacity, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header'; // Import the Header component
import Checklist from './components/Checklist';
import CountriesPage from './components/countriesPage';



export default function App() {
  return (
    <View style={styles.container}>
    {/* Renders Statusbar such as Cellular and other info*/}
      <StatusBar style="auto" />
      {/* Renders Header with logo*/}
      <Header/>{}
      {/* Renders Header Text */}
      <Text style={styles.sectionTitle}>Choose Country</Text>
      
      <View style={styles.countries}>
        <CountriesPage/>{}
      </View>
    
    </View>
    
  );
}

// <View style={styles.tasksWrapper}>
//         <Text style={styles.sectionTitle}>Documents For Japan</Text>
//       </View>
//       <View style={styles.items}>
//       <Checklist/>{}
//       </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle:{
    color:'#002040',
    fontSize:29,
    fontWeight:'bold',
    paddingHorizontal: 21,
    paddingVertical: 15,

  },
  countries: {
    backgroundColor:'#fff'
  }
});

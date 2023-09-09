// Imports
import React from 'react';
import { StyleSheet, FlatList,TouchableOpacity, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header'; // Import the Header component
import Checklist from './components/Checklist';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>{}
      <StatusBar style="auto" />
    
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Documents For Japan</Text>
      </View>
      <View stle={styles.items}>
        <Checklist/>{}
      </View>
    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle:{
    color:'#002040',
    fontSize:28,
    fontWeight:'bold',
    paddingHorizontal: 16,
    paddingVertical: 15,

  }
});

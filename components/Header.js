import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
          <Image source={require('../assets/SkyPassLogo.png')}
                 style={{width: 200, height: 150}}
        />
        </View>
      );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#F5F4F4',
      height: '12%',
      width: '100%',
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20
    },
  });
  
  export default Header;
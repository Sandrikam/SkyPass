import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const CountriesPage = () => {
  const [isLoading,setLoading] = useState(true);  
  const [countryData, setCountryData] = useState([]);
  {/* Declaring our API URL hosted on Netlify */}
  const url='https://cute-travesseiro-578584.netlify.app/countries.json';

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCountryData(json);
        setLoading(false); // Set loading to false after data is fetched
        console.log(countryData); // Log the updated data
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching data');
        setLoading(false); // Ensure loading is set to false on error
      });
  }, []);
      

  return (
    <View style={styles.container}>
        {isLoading ? (
            <ActivityIndicator/>
        ) : (
            <FlatList
                data={countryData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                <Text>{item.name}</Text>
                )}
            
        />)}
      
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  countryName: {
    fontSize: 18,
  },
  countryCode: {
    fontSize: 16,
    color: '#888',
  },
});

export default CountriesPage;

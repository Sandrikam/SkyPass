import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CountriesPage = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in state
        setCountryData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Countries</Text>
      <FlatList
        data={countryData}
        keyExtractor={(item) => item["CLDR display name"]}
        renderItem={({ item }) => (
          <View style={styles.countryItem}>
            <Text style={styles.countryName}>{item["CLDR display name"]}</Text>
          </View>
        )}
      />
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

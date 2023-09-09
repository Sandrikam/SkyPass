import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Passport', checked: false },
    { id: '2', text: 'Visa Statement', checked: true },
    { id: '3', text: 'Work Certificate', checked: false },
    { id: '4', text: 'Last 6 Months of Bank Statement', checked: false },
  
  ]);


  const toggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => toggleItem(item.id)}>
          <View style={styles.item}>
            <Text style={item.checked ? styles.checkedText : styles.uncheckedText}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    //borderBottomWidth: 1,
    //borderBottomColor: '#ccc',
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  uncheckedText: {
    color: '#333',
  },
});

export default Checklist;

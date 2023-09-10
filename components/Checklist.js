import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Passport', checked: false },
    { id: '2', text: 'Visa Statement', checked: true },
    { id: '3', text: 'Work Certificate', checked: false },
    { id: '4', text: 'Last 6 Months of Bank Statement', checked: false },
    { id: '5', text: 'invitation from Resident', checked: false },
    { id: '6', text: '135$ Per Day', checked: false },
    { id: '7', text: 'Valid Reason for Travel', checked: false },
  
  ]);


  const toggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const Progress = ({step,steps,height}) => {
    const [width,setWidth] = React.useState(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;
    
    React.useEffect(() => {
      Animated.timing(animatedValue,{
        toValue: reactive,
        duration:300,
        useNativeDriver: true,
      }).start();
    }, []);

    React.useEffect(() => {
      reactive.setValue(-width + (width * step) / steps);
    }, [step,width]);
    
    return(
      <>
         
        <View onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
          }}
          style = {{
            height,
            backgroundColor: '#E5F2FF',
            borderRadius: height,
            overflow:'hidden',
            flexDirection: 'row', // Added flexDirection
            alignItems: 'center', // Added alignItems
            justifyContent: 'center', // Center content horizontally
          }}
        >    
          <Animated.View 
            style ={{
              height,
              width:'100%',
              backgroundColor: '#007FFF',
              borderRadius: height,
              position:'absolute',
              left:0,
              transform:[{
                translateX: animatedValue,
                  },
                ],
              }}
            />
            <Text 
              style={{
              fontSize:22,
              fontWeight:'bold',
              paddingHorizontal:10,
              textAlign:'justify',
              flexDirection: 'row', // Added flexDirection
              alignItems: 'center', // Added alignItems
              justifyContent: 'center', // Center content horizontally
              }}
        >
          {Math.round((step * 100) / steps)}%
        </Text>

            
          </View>
        </>
      );
    };
//007FFF
  return (
    <View style={styles.container}>
      <Progress step={items.filter((item) => item.checked).length} steps={items.length} height={40}/>
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
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
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

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';

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
        <Text 
          style={{
          //fontfamily:'TT Prosto Sans Trial',
            fontSize:12,
            fontWeight:'bold',
            marginBottom:8,
            paddingLeft:20,
            textAlign:'justify'
          }}
        >
          {step*100/steps}%
        </Text>  
        <View onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
          }}
          style = {{
            height,
            backgroundColor: '#E5F2FF',
            borderRadius: height,
            overflow:'hidden',
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
              top:0,
              transform:[{
                translateX: animatedValue,
                  },
                ],
              }}
            />
          </View>
        </>
      );
    };
//007FFF
  return (
    <View style={styles.container}>
      <Progress step={items.filter((item) => item.checked).length} steps={items.length} height={30}/>
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

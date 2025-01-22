import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NotesScreen() {

  const [text, setText] = useState('');

  // useEffect executed when the page is loaded
    useEffect(() => {
    load();
  }, []);
  
  // Save state data in AsyncStorage
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('data', text);
    } catch (e) {
      alert(e)
    }
  };

  // Obtain data from AsyncStorage and save it in state
  const load = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      if (value !== null) {
        setText(value);
      }
    } catch (e) {
      alert(e)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder="My adventure..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Pressable onPress={storeData} style={styles.pressable}>
        <Text style={styles.pressableText}>Save!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    height: '100%',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  pressable: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#C5A48A',
    margin: 15,
    padding: 20,
    borderRadius: 5,
    width: 120,
    alignSelf:'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
  },
  pressableText:{
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
});

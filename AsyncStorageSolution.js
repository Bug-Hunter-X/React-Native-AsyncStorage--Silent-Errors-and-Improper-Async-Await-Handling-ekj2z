// AsyncStorageSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
    // Handle error appropriately, e.g., display an error message
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    // Handle error appropriately
    return null; // Or throw the error, depending on your needs
  }
};
//Example Usage
storeData('@my_key', {name: 'John Doe', age: 30}).then(()=>{console.log('Data stored')}).catch(e=>{console.error('Error storing',e)});
getData('@my_key').then(value => console.log('Retrieved data:', value)).catch(e => console.error('Error retrieving',e));
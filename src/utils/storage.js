import { AsyncStorage } from 'react-native';

export const saveItem = async (keyName, keyValue) => {
  try {
    return await AsyncStorage.saveItem(keyName, keyValue);
  } catch (error) {
    return false;
  }
};

export const getItem = async (keyName) => {
  try {
    return await AsyncStorage.getItem(keyName);
  } catch (error) {
    return false;
  }
};

export const clearAll = async () => {
  try {
    return await AsyncStorage.clearAll();
  } catch (error) {
    return false;
  }
};

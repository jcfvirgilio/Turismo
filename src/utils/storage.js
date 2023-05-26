import AsyncStorage from '@react-native-async-storage/async-storage';




export const saveItem = async (keyName, value) => {
  try {

    await AsyncStorage.setItem(keyName, value);
    console.log('Datos almacenados correctamente.');
    return true;
  } catch (error) {
    console.log('Error al almacenar los datos: ', error);
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

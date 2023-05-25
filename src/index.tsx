import React, { useEffect, useState } from 'react';
import { AppNavigator } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { NativeBaseProvider } from 'native-base';
import { CustomSpinner } from './utils/CustomSpinner';
import { useFonts } from 'expo-font';
import { theme } from '../src/styles';
import * as Font from 'expo-font';

const store = Store();

export const AppContainer: React.FC = () => {
  /* const [loaded] = useFonts({
    'Quattrocento-Bold': require('../assets/fonts/Quattrocento/Quattrocento-Bold.ttf'),
    'Quattrocento-Regular': require('../assets/fonts/Quattrocento/Quattrocento-Regular.ttf'),
  });

   console.log('loaded::::', loaded);
  if (!loaded) {
    return (
      <NativeBaseProvider theme={theme}>
        <CustomSpinner />
      </NativeBaseProvider>
    );
  }
*/
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <AppNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

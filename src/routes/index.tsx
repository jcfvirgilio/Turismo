import React from 'react'
import { useTheme } from 'native-base'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LOADING_PAGE,
  LOGIN,
  HOME,
  RESULTS,
  PROFILE
} from '../consts'

import { Login } from '../views/Login'
import { Home } from '../views/Home'
import { LoadingPage } from '../views/LoadingPage'
import { Results } from '../views/Results'
import { Profile } from '../views/Profile'


type AppStackParamList = {
  LoadingPage: undefined;
  Login: undefined;
  Home: undefined;
  Results: undefined;
  Profile: undefined;
}


const Stack = createNativeStackNavigator<AppStackParamList>();


export const AppNavigator: React.FC = () => {
  
  const theme = useTheme()

  return (
    <Stack.Navigator>
      <Stack.Screen name={LOADING_PAGE} component={LoadingPage} />
      <Stack.Screen name={LOGIN} component={Login}
        options={{
          headerStyle: {
            backgroundColor: '#DEEFE7',
          },
          headerTintColor: '#000',
        }}/>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={RESULTS} component={Results} />
      <Stack.Screen name={PROFILE} component={Profile} />
    </Stack.Navigator>
  )
}


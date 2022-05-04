import React from 'react';
import { View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* Navigation */
import { DrawerNavigation } from './drawer.routes';


export const Routes: React.FC = () => {

  
  const prefix = Linking.getInitialURL();
  const config = {
    screens: {
      About: 'about',
      Home: 'home',
      Settings: 'settings',
    }
  };
  const linking = { 
    prefixes: ['app://'],
    config
  };
  return(
    <SafeAreaProvider>
      <NavigationContainer
        linking={linking}
        fallback={<View />}
      >
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
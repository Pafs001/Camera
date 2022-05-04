import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../modules/Home';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation={false}
      screenOptions={({ route }) => ({
        lazy: true,
      })}
    >
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}


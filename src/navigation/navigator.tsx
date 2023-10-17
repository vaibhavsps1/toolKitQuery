import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawDrag from '../screen/drawDrag';

export default function Navigator() {
  const Stack = createStackNavigator();

  const MyStack = () => {
    return (
      <Stack.Navigator initialRouteName="DrawDrag" >
        <Stack.Screen name="DrawDrag" component={DrawDrag} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

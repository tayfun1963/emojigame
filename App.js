import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeEkrani from './src/screens/welcomeEkrani';
import soruEkrani from './src/screens/quizScreen';
import {StateProvider} from './src/stateProvider';
import reducer, {initialState} from './src/reducer';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeEkrani"
            component={welcomeEkrani}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SoruEkrani"
            component={soruEkrani}
            options={{headerShown: false}}
            initialParams={{index: 0}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;

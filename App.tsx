import React from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListagemAnimal from './src/screens/ListagemAnimal';
import CadastroAnimal from './src/screens/CadastroAnimal';

const Stack = createStackNavigator();
function App(): React.ReactElement {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen name='CadastroAnimal' component={CadastroAnimal} options={{headerShown: false}}/>
      <Stack.Screen name='ListagemAnimal' component={ListagemAnimal} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>


);


}

export default App;
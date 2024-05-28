import React from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroAnimal from './src/screens/CadastroAnimal';
import EditarAnimais from './src/screens/EditarAnimais';
import ListagemAnimais from './src/screens/ListagemAnimais';

const Stack = createStackNavigator();
function App(): React.ReactElement {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen name='CadastroAnimal' component={CadastroAnimal} options={{headerShown: false}}/>
    <Stack.Screen name='ListagemAnimais' component={ListagemAnimais} options={{headerShown: false}} />
    <Stack.Screen name='EditarAnimais' component={EditarAnimais}options={{ headerShown: false }} />
    </Stack.Navigator>

   </NavigationContainer>


);


}

export default App;
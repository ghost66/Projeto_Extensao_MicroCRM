/**
 * MicroCRM App
 *
 * Descrição :
 *
 *  Este projeto é um aplicativo de micro CRM para dispositivos Android,
 *  criado com o padrão MVC, usando o framework React Native e o banco de dados SQLite.
 *  O aplicativo foi desenvolvido para a disciplina de Programação,
 *  para Dispositivos Móveis em Android da Universidade Estácio.
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ServicoScreen from './src/views/ServicoScreen';
import ServiceHistoryScreen from './src/views/ServiceHistoryScreen';
import SalesManagementScreen from './src/views/SalesManagementScreen';
import { createTables } from './src/models/Database';
import MenuScreen from './src/views/MenuScreen';
import HomeScreen from './src/views/HomeScreen';


const Stack = createStackNavigator();

const App = () => {
  // Criar as tabelas ao iniciar a aplicação
  React.useEffect(() => {
    createTables();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ServicoScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:'Home'}}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{title: 'Menu'}}/>
        <Stack.Screen name="ContatoScreen" component={HomeScreen} options={{title:'Contatos'}}/>
        <Stack.Screen name="ServicoScreen" component={ServicoScreen} options={{ title: 'Serviços' }} />
        <Stack.Screen name="ServiceHistoryScreen" component={ServiceHistoryScreen} options={{ title: 'Histórico de Serviços' }} />
        <Stack.Screen name="SalesManagementScreen" component={SalesManagementScreen} options={{ title: 'Gestão de Vendas e Faturamento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

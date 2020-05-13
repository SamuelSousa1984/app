import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from './pages/SignUp';
import Cadastro from './pages/Cadastro';
import CheckUp from './pages/CheckUp';
import Ciclo from './pages/Ciclo';
import Update from './pages/Update';
import Home from './pages/Home';
import Questionario from './pages/Questionario';
import Dieta from './pages/Dieta';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Home,
            Questionario,
            Cadastro,
            CheckUp,
            Ciclo,
            Update,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#203a47',
                marginTop: 30,
              },
            },
          },
        ),
        Complements: createSwitchNavigator({
          Dieta
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );

/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Image} from './styles';
import home from '~/assets/home.png';

export default function Home() {
  return (
    <Container>
      <Image source={home} />
    </Container>
  );
}

Home.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor} />,
};

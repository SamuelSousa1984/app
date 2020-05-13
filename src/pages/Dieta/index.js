import React from 'react';
import {TouchableOpacity} from 'react-native'

import {Container, Text, LinkText} from './styles';

export default function Dieta({navigation}) {
  return (
    <Container>
      <Text>
        Dieta
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <LinkText>
          Voltar
        </LinkText>
      </TouchableOpacity>

    </Container>);
}

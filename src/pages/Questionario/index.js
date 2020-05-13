/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import {Button, ScrollView, Image} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Text} from './styles';

import logo from '../../assets/logo.jpg';

export default function Questionario({navigation}) {
  const radio_props = [
    {label: 'Sim   ', value: 0},
    {label: 'Não   ', value: 1},
  ];
  return (
    <Container>
      <ScrollView>
        <Image source={logo} />
        <Text>
          Este Questionário tem por objetivo identificar a necessidade de
          avaliação por um médico antes do início ou do aumento do nível da
          atividade física. Por favor, assinale “sim” ou “não” as seguintes
          perguntas:
        </Text>
        <Text>
          Algum médico já disse que você possui algum problema de coração ou
          pressão arterial, e que somente deveria realizar atividade física
          supervisionado por um profissional de saúde?
        </Text>
        <RadioForm
          wrapStyle
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>Você sente dores no peito quando pratica atividade física?</Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          No ultimo mês, você sentiu dores no peito ao praticar atividade
          física?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você apresenta algum desequilíbrio devido à tontura e⁄ou perda
          momentânea da consciência?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você apresenta algum problema ósseo ou articular, que pode ser afetado
          ou agravado pela atividade física?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você atualmente toma algum tipo de medicação de uso contínuo?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você realiza algum tipo de tratamento médico para pressão arterial ou
          problemas cardíacos?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você realiza algum tratamento médico contínuo, que possa ser afetado
          ou prejudicado com atividade física?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Você já se submeteu a algum tipo de cirurgia , que comprometa de
          alguma forma de atividade física?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Sabe de alguma outra razão pela qual a atividade física possa
          eventualmente comprometer sua saúde?
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          labelHorizontal
          formHorizontal
          buttonColor="#203a47"
          animation
          onPress={value => value}
        />
        <Text>
          Declaro, que estou ciente de que é recomendável conversar com um
          médico, antes de iniciar ou aumentar o nível de atividade física
          pretendida, assumindo plena responsabilidade pela realização de
          qualquer atividade física sem o atendimento desta recomendação.
        </Text>
        <Button
          title="Estou Ciente"
          color="#203a47"
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </Container>
  );
}

Questionario.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="pencil-square-o" size={25} color={tintColor} />
  ),
};

/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch, useSelector} from 'react-redux';
import {Button, ScrollView, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Title, TitleView, View, ButtonView, List} from './styles';

import api from '~/services/api';
import {signOut} from '~/store/modules/auth/actions';

import Profile from '~/components/Profile';
//import { ProxyTypeSet } from 'immer/dist/internal';
//import { iteratorSymbol } from 'immer/dist/internal';

export default function Update({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const [profile, setProfile] = useState([]);

  function handleLogout() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function fetchData() {
      const username = await AsyncStorage.getItem('username')
      try {
        await api.get('cadastro', {
          headers: {
            Auth: username
          }
        }).then(response => {
          setProfile(response.data)
        });
      } catch (err) {
        alert('Falha ao obter dados', 'Verifique credenciais e tente novamente.')
      }
    }

    fetchData();
  }, [profile]);

  return (
    <Container>
      <ScrollView>
        <TitleView>
          <Title>PERFIL</Title>
        </TitleView>

        <View>
          {profile.map(userData => (
            <View key={userData.nome}>
              <Title>Indicadores</Title>
              <Text>Nome: {userData.nome}</Text>
              {userData.sexo ? 
                <Text>Sexo: Masculino</Text>
                :
                <Text>Sexo: Feminino</Text>
              }
              <Text>Altura: {userData.altura}</Text>
              <Text>Peso: {userData.peso}</Text>
              <Text>IMC: {userData.imc}</Text>
              <Title>Índices Cardíacos</Title>
              <Text>Frequência cardíaca: {userData.fc}</Text>
              <Text>Pressão Sistólica: {userData.ps}</Text>
              <Text>Pressão Diastólica: {userData.pd}</Text>
              <Title>Ciclo Menstrual</Title>
              {userData.sexo ? 
                <Text>Homens não possuem ciclo menstrual</Text>
                :
                <Text>Última menstruação: {userData.dia}/{userData.mes}/{userData.ano}</Text>
              }
              
            </View>
          ))}
        </View>

        <ButtonView>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="VOLTAR"
            color="#203a47"
          />
        </ButtonView>
        <ButtonView>
          <Button
            onPress={handleLogout}
            title="SAIR"
            color="#FF4500"
          />
        </ButtonView>
      </ScrollView>      
    </Container>
  );
}

Update.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({tintColor}) => <Icon name="gear" size={25} color={tintColor} />,
};

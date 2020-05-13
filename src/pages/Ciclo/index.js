/* eslint-disable react/prop-types */
import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, DInput, Form, Text, SubmitButton} from './styles';

import {cicloProfileRequest} from '~/store/modules/user/actions';

export default function Ciclo() {
  const dispatch = useDispatch();

  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [ano, setAno] = useState();

  const mesRef = useRef();
  const anoRef = useRef();

  async function handleSubmit() {
    try {
      dispatch(cicloProfileRequest(dia, mes, ano))
    } catch(err) {
      alert('Falha ao cadastrar', 'Tente novamente.')
    }
  }

  return (
    <Container>
      <Text>ÚLTIMA MENSTRUAÇÃO</Text>
      <Form>
        <DInput
          maxLength={2}
          keyboardType="numeric"
          placeholder="Dia"
          value={dia}
          onChangeText={setDia}
          onSubmitEditing={() => mesRef.current.focus()}
        />
        <DInput
          maxLength={2}
          keyboardType="numeric"
          placeholder="Mês"
          ref={mesRef}
          value={mes}
          onChangeText={setMes}
          onSubmitEditing={() => anoRef.current.focus()}
        />
        <DInput
          maxLength={4}
          keyboardType="numeric"
          placeholder="Ano"
          ref={anoRef}
          value={ano}
          onChangeText={setAno}
          onSubmitEditing={handleSubmit}
        />
      </Form>
      <SubmitButton onPress={handleSubmit}>IR</SubmitButton>
    </Container>
  );
}

Ciclo.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="check-circle" size={25} color={tintColor} />
  ),
};

/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import {Image, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/logo.jpg';
import Background from '~/components/Background';

import {Container, Form, FormInput, SignLink, SignLinkText} from './styles';

import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try {
      await AsyncStorage.setItem('username', username)

      dispatch(signInRequest(username, password));
    } catch(err) {
      alert('Falha ao salvar os dados', 'Verifique credenciais e tente novamente.')
    }
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="account-circle"
            autoCorrect={false}
            capitalize="none"
            placeholder="Login"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={username}
            onChangeText={setUsername}
          />

          <FormInput
            ref={passwordRef}
            icon="key-variant"
            secureTextEntry
            placeholder="Password"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            color="#203a47"
            title="Acessar"
            onPress={handleSubmit}
          />
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Cadastre-me</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

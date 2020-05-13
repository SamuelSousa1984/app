/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, Image, Text, Button} from 'react-native';

import logo from '~/assets/logo.jpg';
import Background from '~/components/Background';
import {signUpRequest} from '~/store/modules/auth/actions';

import {Container, Form, FormInput, SignLink, SignLinkText} from './styles';

export default function SignUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(nome, username, password));
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView>
      <Background>
        <Container>
          <Form>
            <Text style={{padding: 9, fontSize: 20, color: 'gray'}}>
              Nome Completo
            </Text>
            <FormInput
              capitalize="none"
              placeholder="Nome"
              placeholderTextColor="#707070"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={nome}
              onChangeText={setNome}
            />
            <Text style={{padding: 9, fontSize: 20, color: 'gray'}}>
              Nome de Usuário
            </Text>
            <FormInput
              ref={emailRef}
              autoCorrect={false}
              capitalize="none"
              placeholder="Nome de Usuário"
              placeholderTextColor="#707070"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={{padding: 9, fontSize: 20, color: 'gray'}}>Senha</Text>
            <FormInput
              ref={passwordRef}
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#707070"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <Image
              style={{alignSelf: 'center', marginTop: 30, marginBottom: 30}}
              source={logo}
            />
            <Button
              loading={loading}
              color="#203a47"
              title="Cadastrar"
              onPress={handleSubmit}
            />
          </Form>

          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText style={{marginBottom: 40}}>
              Já tenho conta
            </SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </ScrollView>
  );
}

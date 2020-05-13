/* eslint-disable react/prop-types */
import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Form,
  FormInput,
  Text,
  InputText,
  Image,
  SignLink,
  SignLinkText,
  ButtonView,
  Button,
  TextButton,
} from './styles';

import {checkUpRequest} from '~/store/modules/user/actions';

import pressao from '~/assets/pressão.png';

export default function CheckUp({navigation}) {
  const dispatch = useDispatch();

  const [ps, setPs] = useState();
  const [pd, setPd] = useState();
  const [fc, setFc] = useState();

  const psRef = useRef();
  const pdRef = useRef();

  // eslint-disable-next-line prettier/prettier
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    try {
      dispatch(checkUpRequest(fc, ps, pd));
      navigation.navigate('Home');
    } catch(err) {
      alert('Falha ao submeter os dados', 'Tente novamente.')
    }
    
  }

  return (
    <ScrollView>
      <Container>
        <Image source={pressao} />
        <Text>PRESSÃO ARTERIAL E FREQUÊNCIA CARDÍACA</Text>

        <Form>
          <InputText>FC</InputText>
          <FormInput
            minLength={2}
            maxLength={3}
            keyboardType="numeric"
            placeholder="Frequência Cardíaca"
            placeholderTextColor="#707070"
            onSubmitEditing={() => psRef.current.focus()}
            value={fc}
            onChangeText={setFc}
          />

          <InputText>PA</InputText>
          <FormInput
            ref={psRef}
            minLength={2}
            maxLength={2}
            keyboardType="numeric"
            placeholder="Pressão Sistólica"
            placeholderTextColor="#707070"
            onSubmitEditing={() => pdRef.current.focus()}
            value={ps}
            onChangeText={setPs}
          />

          <FormInput
            ref={pdRef}
            minLength={1}
            maxLength={1}
            keyboardType="numeric"
            placeholder="Pressão Diastólica"
            placeholderTextColor="#707070"
            onSubmitEditing={handleSubmit}
            value={pd}
            onChangeText={setPd}
          />
        </Form>
        <ButtonView>
          <Button loading={loading} onPress={handleSubmit}>
            <TextButton>Salvar</TextButton>
          </Button>
        </ButtonView>

        <SignLink onPress={() => navigation.navigate('Ciclo')}>
          <SignLinkText>Ir pra controle de ciclo menstrual</SignLinkText>
        </SignLink>
      </Container>
    </ScrollView>
  );
}

CheckUp.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="heart" size={25} color={tintColor} />
  ),
};

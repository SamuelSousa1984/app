import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Text = styled.Text`
  color: #707070;
  font-weight: bold;
  font-size: 23.5px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  padding: 6px;
  font-size: 16px;
  color: #203a47;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  padding: 10px 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #203a47;
  font-weight: bold;
  font-size: 16px;
`;

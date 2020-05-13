import styled from 'styled-components/native';

import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input).attrs({
  textColor: '#ffffff',
})`
  margin-bottom: 10px;
  padding: 6px;
  font-size: 16px;
  background: #203a47;
  color: #ffffff;
`;

export const Text = styled.Text`
  color: #203a47;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputText = styled.Text`
  color: #203a47;
  font-size: 24px;
  font-weight: bold;
  padding: 9px;
`;

export const Image = styled.Image`
  width: 360px;
  height: 200px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #203a47;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonView = styled.View`
  width: 280px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: #203a47;
  padding: 16px;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  align-self: center;
  font-size: 18px;
`;

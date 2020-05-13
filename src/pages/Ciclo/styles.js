import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const DInput = styled(Input).attrs({
  placeholderTextColor: '#707070',
})`
  margin-bottom: 10px;
  padding: 6px;
  font-size: 16px;
  color: #203a47;
  border-radius: 27px;
  border-color: #707070;
  width: 75px;
  align-self: center;
`;

export const Text = styled.Text`
  color: #203a47;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
  width: 325px;
`;

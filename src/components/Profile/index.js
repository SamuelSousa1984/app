import React from 'react';

import { Container, Info, Title, User} from './styles';

export default function Profile({ data }) {
  return (
    <Container>
        <Title>Dados Pessoais</Title>
        <Info>
            <Title>Nome:</Title>
            <User>{data.profile.nome}</User>
        </Info>
    </Container>
  );
}
 
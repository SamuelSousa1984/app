import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const TitleView = styled.View`
  background-color: #203a47;
  width: 360px;
  justify-content: center;
  align-content: center;
  align-self: center;

  margin-bottom: 15px;
`;

export const View = styled.View`
  margin-bottom: 15px;

  justify-content: center;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #a68833;
  margin-top: 20px;
  margin-bottom: 20px;

  align-self: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #203a47;

  align-self: center;
  padding: 20px;
`;

export const ButtonView = styled.View`
  width: 340px;
  margin-bottom: 10px;
`;

export const Info = styled.View`
    margin-bottom: 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between
`;

export const InfoTitle = styled.Text`
    font-size: 14px;
    color: #000;
`;

export const User = styled.Text`
    font-size: 13px;
    color: #111;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30}
})``;
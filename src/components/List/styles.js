import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Title = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 20px;
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    margin-left: 10px;
    font-size: 18px;
    font-family: 'Nunito-Regular';
`;

export const IconImage = styled.Image`
    width: 36px;
    height: 36px;
`;

export const Container = styled(RectButton)`
    padding: 20px;
`;

export const ItemTitle = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
`;

export const Graduated = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Bold';
    color: #f8b195;
`;

export const Date = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
`;

export const Provider = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
`;

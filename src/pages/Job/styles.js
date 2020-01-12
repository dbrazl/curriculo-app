import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(Animatable.View).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    duration: props.duration,
}))`
    flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const BackButton = styled(RectButton)`
    position: relative;
    top: ${Platform.OS === 'ios' ? 100 : 50};
    left: 20;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    z-index: 1;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

export const Profile = styled.View`
    margin-top: ${Platform.OS === 'ios' ? '150' : '50'}px;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Description = styled.Text`
    width: 280px;
    font-size: 18px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
    text-align: center;
    margin-top: 30px;
`;

export const Title = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-left: 20px;
    width: ${width - 20};
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-left: 10px;
`;

export const InfoJob = styled.View`
    padding: 20px;
    width: ${width};
`;

export const Job = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
`;

export const Date = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
`;

export const Contratacao = styled.Text.attrs({
    numberOflInes: 1,
})`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
`;

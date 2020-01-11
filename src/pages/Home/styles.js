import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    delay: props.delay,
    duration: props.duration,
}))`
    flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Profile = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 30px;
`;

export const Photo = styled(Animatable.Image).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    delay: props.delay,
    duration: props.duration,
}))`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 30px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-bottom: 30px;
`;

export const Age = styled.Text`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-bottom: 30px;
`;

export const Job = styled.Text`
    font-size: 18px;
    font-family: 'Nunito-Regular';
`;

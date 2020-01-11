import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    flex: 1;
    background-color: #f67280;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Icon = styled(Animatable.Image).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    delay: props.delay,
    duration: props.duration,
}))`
    width: 50;
    height: 50;
`;

export const Bold = styled(Animatable.Text).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    duration: props.duration,
}))`
    color: #fff;
    font-size: 25px;
    font-family: 'Nunito-Bold';
    margin-left: 10px;
`;

export const Message = styled(Animatable.Text).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    delay: props.delay,
    duration: props.duration,
}))`
    color: #fff;
    font-size: 25px;
    font-family: 'Nunito-Regular';
`;

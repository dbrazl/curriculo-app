import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

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
    top: 100;
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
    margin-top: 150px;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 30px;
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    padding: 0 20px;
    margin-bottom: 30px;
`;

export const IGC = styled.Text`
    font-size: 16px;
    opacity: 0.5;
    font-family: 'Nunito-Regular';
    margin-top: 5px;
`;

export const CourseInfo = styled.View`
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
`;

export const Course = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    padding: 0 20px;
    margin-bottom: 20px;
`;

export const Graduated = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 25px;
    font-family: 'Nunito-Bold';
    color: #f8b195;
    margin-bottom: 20px;
`;

export const Running = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
    margin-bottom: 20px;
`;

export const Date = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
`;

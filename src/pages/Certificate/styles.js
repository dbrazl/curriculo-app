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
    margin-top: ${Platform.OS === 'ios' ? '150' : '100'}px;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Institute = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-top: 30px;
`;

export const IconImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-top: 30px;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    padding: 0 20px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Board = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
`;

export const Credential = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
    margin-left: 10px;
`;

export const EmitedAt = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    opacity: 0.5;
    margin-left: 10px;
`;

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Title = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 20px;
    width: ${width - 40};
`;

export const LeftSide = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const RightSide = styled.View``;

export const IconImage = styled.Image`
    width: 36px;
    height: 36px;
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
    color: ${props => (props.color ? props.color : '#000')};
`;

export const NumberBoard = styled.View`
    padding: 10px;
    border-radius: 5px;
    background-color: #f8b195;
`;

export const Number = styled.Text`
    font-size: 18px;
    font-family: 'Nunito-Bold';
    color: #fff;
`;

export const List = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`
    margin-top: 20px;
    margin-bottom: 30px;
    width: ${width};
`;

export const BoardList = styled.View`
    padding: 10px;
    border-radius: 5px;
    background-color: #f8b195;
    margin-left: 20px;
`;

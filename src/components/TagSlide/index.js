import React from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/icons/default.png';

import Icon from 'react-native-vector-icons/Feather';

import {
    Title,
    LeftSide,
    RightSide,
    Label,
    NumberBoard,
    Number,
    List,
    BoardList,
    IconImage,
} from './styles';

renderItemList = item => {
    return (
        <BoardList>
            <Label color="#fff">{item.info}</Label>
        </BoardList>
    );
};

formatNumber = number => {
    if (number > 0 && number < 10) {
        return `0${number}`;
    }

    return number;
};

export default function TagSlide({ data, title, icon, source }) {
    return (
        <>
            <Title>
                <LeftSide>
                    {icon.length !== 0 && <Icon name={icon} size={36} />}
                    {icon.length === 0 && <IconImage source={source} />}
                    <Label marginLeft={10}>{title}</Label>
                </LeftSide>
                <RightSide>
                    <NumberBoard>
                        <Number>{formatNumber(data.length)}</Number>
                    </NumberBoard>
                </RightSide>
            </Title>

            <List
                data={data}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => renderItemList(item)}
                horizontal
            />
        </>
    );
}

TagSlide.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
    source: PropTypes.node,
};

TagSlide.defaultProps = {
    data: [],
    title: '',
    icon: '',
    source: img,
};

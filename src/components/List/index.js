import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';

import img from '../../assets/images/icons/default.png';
import {
    Title,
    Label,
    IconImage,
    Container,
    ItemTitle,
    Graduated,
    Date,
    Provider,
} from './styles';

export default function List({ title, data, icon, source, onPress }) {
    renderItem = item => {
        return (
            <Container key={item.id} onPress={() => onPress(item)}>
                <ItemTitle>{item.title}</ItemTitle>
                {item.graduated ? (
                    <Graduated>Formado</Graduated>
                ) : (
                    <Date>{item.dateFormatted}</Date>
                )}
                <Provider>{item.employer || item.institute}</Provider>
            </Container>
        );
    };

    return (
        <>
            <Title>
                {icon.length !== 0 && <Icon name={icon} size={36} />}
                {icon.length === 0 && <IconImage source={source} />}
                <Label>{title}</Label>
            </Title>

            {data.map(item => renderItem(item))}
        </>
    );
}

List.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    icon: PropTypes.string,
    source: PropTypes.node,
    onPress: PropTypes.func,
};

List.defaultProps = {
    title: 'Sem título',
    data: [],
    icon: '',
    source: img,
    onPress: () => {},
};

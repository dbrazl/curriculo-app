import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import certificate from '../../assets/images/icons/certificate.png';
import Icon from 'react-native-vector-icons/Feather';

import { entryAnimation, outAnimation } from '../../animations/Others';

import {
    Container,
    Scroll,
    BackButton,
    Content,
    Profile,
    Photo,
    Institute,
    IconImage,
    Title,
    Board,
    Label,
    Credential,
    EmitedAt,
} from './styles';

export default function View({ viewProps }) {
    const [entry, setEntry] = useState(true);
    const { title, institute, mock, goBack } = viewProps;
    const { logo, credential, dateFormatted } = mock;

    let timeout = [];

    goToHome = () => {
        setEntry(false);
        timeout[0] = setTimeout(goBack, 500);
    };

    useEffect(() => {
        return () => {
            timeout.forEach(element => clearTimeout(element));
        };
    }, []);

    return (
        <Container animation={entry ? entryAnimation : outAnimation}>
            <Scroll>
                <BackButton onPress={goToHome}>
                    <Icon name="arrow-left" size={50} color="#000" />
                </BackButton>

                <Content>
                    <Profile>
                        <Photo source={logo} />
                        <Institute>{institute}</Institute>
                    </Profile>

                    <IconImage source={certificate} />

                    <Title>{title}</Title>
                    <Board>
                        <Label>Credêncial:</Label>
                        <Credential>{credential}</Credential>
                    </Board>
                    <Board>
                        <Label>Emitido em:</Label>
                        <EmitedAt>{dateFormatted}</EmitedAt>
                    </Board>
                </Content>
            </Scroll>
        </Container>
    );
}

View.propTypes = {
    viewProps: PropTypes.oneOfType([PropTypes.array, PropTypes.obj]),
};

View.defaultProps = {
    viewProps: {},
};

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import icon from '../../assets/images/icons/search.png';

import {
    entryText,
    scaleIconEntry,
    outText,
    outImage,
} from '../../animations/Entry';

import { Container, Wrapper, Icon, Bold, Message, Message2 } from './styles';

export default function View({ goToHome, timeout }) {
    const [entry, setEntry] = useState(true);

    setOutAnimation = () => {
        timeout[1] = setTimeout(() => {
            setEntry(false);
        }, 2000);
    };

    setOutAnimation();
    goToHome();

    return (
        <>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Container>
                <Wrapper>
                    <Icon
                        source={icon}
                        animation={entry ? scaleIconEntry : outImage}
                        duration={500}
                    />
                    <Bold
                        animation={entry ? entryText : outText}
                        duration={500}
                        delay={500}
                    >
                        Olá,{' '}
                    </Bold>
                    <Message
                        animation={entry ? entryText : outText}
                        duration={500}
                        delay={1000}
                    >
                        Recrutador
                    </Message>
                </Wrapper>
            </Container>
        </>
    );
}

View.propTypes = {
    goToHome: PropTypes.func,
    timeout: PropTypes.array,
};

View.defaultProps = {
    goToHome: () => {},
    timeout: [],
};

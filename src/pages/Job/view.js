import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';
import brain from '../../assets/images/icons/brain.png';

import { entryAnimation, outAnimation } from '../../animations/Others';

import TagSlide from '../../components/TagSlide';
import {
    Container,
    Scroll,
    BackButton,
    Content,
    Profile,
    Photo,
    Description,
    Title,
    Label,
    InfoJob,
    Job,
    Date,
    Contratacao,
} from './styles';

export default function View({ viewProps }) {
    const [entry, setEntry] = useState(true);
    const { title, dateFormatted, hiring, mock, goBack } = viewProps;
    const { logo, description, techs, managementSkills } = mock;

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
        <Container
            animation={entry ? entryAnimation : outAnimation}
            duration={500}
        >
            <Scroll>
                <BackButton onPress={goToHome}>
                    <Icon name="arrow-left" size={50} color="#000" />
                </BackButton>

                <Content>
                    <Profile>
                        <Photo source={logo} />
                        <Description>{description}</Description>
                    </Profile>

                    {techs && techs.length !== 0 && (
                        <TagSlide
                            data={techs}
                            title="Habilidades em TI"
                            icon="cpu"
                        />
                    )}

                    {managementSkills && managementSkills.length !== 0 && (
                        <TagSlide
                            data={managementSkills}
                            title="Habilidades em Gestão"
                            source={brain}
                        />
                    )}

                    <Title>
                        <Icon name="briefcase" size={32} color="#000" />
                        <Label>Função</Label>
                    </Title>

                    <InfoJob>
                        <Job>{title}</Job>
                        <Date>{dateFormatted}</Date>
                        <Contratacao>{`Contratação ${hiring}`}</Contratacao>
                    </InfoJob>
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

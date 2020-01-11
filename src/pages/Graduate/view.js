import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';

import { entryAnimation, outAnimation } from '../../animations/Others';

import StarRating from 'react-native-star-rating';
import {
    Container,
    Scroll,
    BackButton,
    Content,
    Profile,
    Photo,
    Label,
    IGC,
    CourseInfo,
    Course,
    Running,
    Graduated,
    Date,
} from './styles';

export default function View({ viewProps }) {
    const [entry, setEntry] = useState(true);
    const {
        institute,
        title,
        graduated,
        dateFormatted,
        mock,
        goBack,
    } = viewProps;
    const { logo, instituitionNote } = mock;

    let timeout = [];

    formatInstitute = () => {
        const [, name] = institute.split('- ');
        return name;
    };

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
                        <Label>{formatInstitute()}</Label>
                        <Label>Nota da instituição no MEC</Label>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={instituitionNote}
                            emptyStar={'star-o'}
                            fullStar={'star-o'}
                            halfStar={'star-half'}
                            iconSet={'FontAwesome'}
                            starSize={36}
                            fullStarColor={'black'}
                            halfStarColor={'black'}
                            starStyle={{ marginLeft: 5 }}
                        />
                        <IGC>IGC</IGC>

                        <CourseInfo>
                            <Course>{title}</Course>
                            {graduated ? (
                                <Graduated>Formado</Graduated>
                            ) : (
                                <Running>Em andamento</Running>
                            )}
                            <Date>{dateFormatted}</Date>
                        </CourseInfo>
                    </Profile>
                </Content>
            </Scroll>
        </Container>
    );
}

View.propTypes = {
    viewProps: PropTypes.oneOfType([PropTypes.array, PropTypes.obj]),
};

View.defaultProp = {
    viewProps: {},
};

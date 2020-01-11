import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TagSlide from '../../components/TagSlide';
import List from '../../components/List';

import perfil from '../../assets/images/pictures/perfil.png';
import brain from '../../assets/images/icons/brain.png';
import graduate from '../../assets/images/icons/graduate.png';
import project from '../../assets/images/icons/project.png';
import certificate from '../../assets/images/icons/certificate.png';

import { entryAnimation, outAnimation } from '../../animations/Home';

import { Container, Scroll, Profile, Photo, Name, Age, Job } from './styles';

export default function View({ viewProps }) {
    const [entry, setEntry] = useState(true);
    let timeout = [];

    const {
        skillsTI,
        skillsManagement,
        jobs,
        graduates,
        projects,
        certificates,
        navigateToJob,
        navigateToGraduate,
        navigateToProject,
        navigateToCertificate,
    } = viewProps;

    goToJob = item => {
        setEntry(false);
        timeout[0] = setTimeout(() => navigateToJob(item), 500);
    };

    goToGraduate = item => {
        setEntry(false);
        timeout[0] = setTimeout(() => navigateToGraduate(item), 500);
    };

    goToProject = item => {
        setEntry(false);
        timeout[0] = setTimeout(() => navigateToProject(item), 500);
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
            delay={500}
        >
            <Scroll>
                <Profile>
                    <Photo source={perfil} />
                    <Name>Daniel Braz Lopes</Name>
                    <Age>22 anos</Age>
                    <Job>Desenvolvedor React Native Pleno</Job>
                </Profile>

                <TagSlide data={skillsTI} title="Habilidade em TI" icon="cpu" />

                <TagSlide
                    data={skillsManagement}
                    title="Habilidade em gestão"
                    source={brain}
                />

                <List
                    data={jobs}
                    icon="briefcase"
                    title="Experiências profissionais"
                    onPress={goToJob}
                />

                <List
                    data={graduates}
                    source={graduate}
                    title="Graduações"
                    onPress={goToGraduate}
                />

                <List
                    data={projects}
                    source={project}
                    title="Projetos acadêmicos"
                    onPress={goToProject}
                />

                <List
                    data={certificates}
                    source={certificate}
                    title="Certificados"
                    onPress={navigateToCertificate}
                />
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

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { storeRequest } from '../../store/modules/itemList/actions';

import {
    skillsTI,
    skillsManagement,
    jobs,
    graduates,
    projects,
    certificates,
} from './mock';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();

    navigateToJob = item => {
        dispatch(storeRequest(item));
        navigation.navigate('Job');
    };

    navigateToGraduate = item => {
        dispatch(storeRequest(item));
        navigation.navigate('Graduate');
    };

    navigateToProject = item => {
        dispatch(storeRequest(item));
        navigation.navigate('Project');
    };

    navigateToCertificate = item => {
        dispatch(storeRequest(item));
        navigation.navigate('Certificate');
    };

    const viewProps = {
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
    };

    return <View viewProps={viewProps} />;
}

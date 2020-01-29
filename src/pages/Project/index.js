import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { resetRequest } from '../../store/modules/itemList/actions';

import { UFF, cefetRJ } from './mock';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemList);
    const { title, dateFormatted, job, institute } = item;

    let timeout = [];

    findEmployer = find => {
        return institute.indexOf(find) !== -1 ? true : false;
    };

    selectMock = () => {
        if (findEmployer('CEFET/RJ')) return cefetRJ;

        if (findEmployer('UFF')) return UFF;
    };

    goBack = () => {
        timeout[0] = setTimeout(() => dispatch(resetRequest()), 500);
        navigation.navigate('Home');
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
    }, []);

    useEffect(() => {
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', goBack);

            timeout.forEach(element => clearTimeout(element));
        };
    }, []);

    const viewProps = {
        title,
        dateFormatted,
        job,
        mock: selectMock(),
        goBack,
    };

    return <View viewProps={viewProps} />;
}

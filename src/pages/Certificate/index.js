import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { resetRequest } from '../../store/modules/itemList/actions';

import { Udemy, UAITEC } from './mock';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemList);
    const { title, institute, dateFormatted } = item;

    let timeout = [];

    findInstitute = find => {
        return institute.indexOf(find) !== -1 ? true : false;
    };

    selectMock = () => {
        if (findInstitute('Udemy')) {
            let response;

            Udemy.forEach(element => {
                if (element.title === title) response = element;
            });

            return response;
        }

        if (findInstitute('UAITEC')) {
            let response;

            UAITEC.forEach(element => {
                if (element.title === title) response = element;
            });

            return response;
        }

        return null;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
    }, []);

    goBack = () => {
        timeout[0] = setTimeout(() => dispatch(resetRequest()), 500);
        navigation.navigate('Home');
        return true;
    };

    useEffect(() => {
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', goBack);

            timeout.forEach(element => clearTimeout(element));
        };
    }, []);

    const viewProps = {
        title,
        institute,
        dateFormatted,
        mock: selectMock(),
        goBack,
    };

    return <View viewProps={viewProps} />;
}

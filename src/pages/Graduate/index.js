import React, { useEffect } from 'react';

import { Unicesumar, PUCMinas, UVA } from './mock';

import { useDispatch, useSelector } from 'react-redux';
import { resetRequest } from '../../store/modules/itemList/actions';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemList);
    const { institute, title, graduated, dateFormatted } = item;

    let timeout = [];

    findEmployer = find => {
        return institute.indexOf(find) !== -1 ? true : false;
    };

    selectMock = () => {
        if (findEmployer('Unicesumar')) return Unicesumar;

        if (findEmployer('PUC')) return PUCMinas;

        if (findEmployer('UVA')) return UVA;
    };

    goBack = () => {
        timeout[0] = setTimeout(() => dispatch(resetRequest()), 500);
        navigation.navigate('Home');
    };

    useEffect(() => {
        return () => {
            timeout.forEach(element => clearTimeout(element));
        };
    }, []);

    const viewProps = {
        institute,
        title,
        graduated,
        dateFormatted,
        mock: selectMock(),
        goBack,
    };

    return <View viewProps={viewProps} />;
}

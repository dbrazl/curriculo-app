import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { resetRequest } from '../../store/modules/itemList/actions';

import { AM4, CNPq, Zarb } from './mock';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemList);
    const { title, dateFormatted, employer, hiring } = item;

    let timeout = [];

    findEmployer = find => {
        return employer.indexOf(find) !== -1 ? true : false;
    };

    selectMock = () => {
        if (findEmployer('AM4')) return AM4;

        if (findEmployer('CNPq')) return CNPq;

        if (findEmployer('Zarb')) return Zarb;
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
        title,
        dateFormatted,
        hiring,
        mock: selectMock(),
        goBack,
    };

    return <View viewProps={viewProps} />;
}

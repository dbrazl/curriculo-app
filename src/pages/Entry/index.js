import React, { useEffect } from 'react';

import View from './view';

export default function Model({ navigation }) {
    let timeout = [];

    goToHome = () => {
        timeout[0] = setTimeout(() => navigation.navigate('Home'), 2500);
    };

    useEffect(() => {
        return () => {
            timeout.forEach(element => clearTimeout(element));
        };
    }, []);

    return <View goToHome={goToHome} timeout={timeout} />;
}

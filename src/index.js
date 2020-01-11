import React from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';

import './config/ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
                <View />
            </PersistGate>
        </Provider>
    );
}

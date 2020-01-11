import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'curriculo-Daniel-Lopes',
            storage,
            whitelist: ['itemList'],
        },
        reducers
    );

    return persistedReducer;
};

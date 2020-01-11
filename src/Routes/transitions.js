import React from 'react';
import { Transition } from 'react-native-reanimated';

export function transition() {
    return (
        <Transition.Together>
            <Transition.Out
                type="fade"
                durationMs={400}
                interpolation="easeIn"
            />
            <Transition.In type="fade" durationMs={400} />
        </Transition.Together>
    );
}

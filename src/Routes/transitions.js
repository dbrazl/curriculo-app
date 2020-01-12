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

export function transitionIntern() {
    return (
        <Transition.Together>
            <Transition.Out
                type="slide-right"
                durationMs={400}
                interpolation="easeOut"
            />
            <Transition.Out
                type="fade"
                durationMs={400}
                interpolation="easeOut"
            />
            <Transition.In
                type="slide-left"
                durationMs={400}
                interpolation="easeIn"
            />
            <Transition.In
                type="fade"
                durationMs={400}
                interpolation="easeIn"
            />
        </Transition.Together>
    );
}

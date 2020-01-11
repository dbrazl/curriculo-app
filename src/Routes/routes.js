import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { transition } from './transitions';

// Pages
import Entry from '../pages/Entry';
import Home from '../pages/Home';
import Job from '../pages/Job';
import Graduate from '../pages/Graduate';
import Project from '../pages/Project';
import Certificate from '../pages/Certificate';

navigation = () =>
    createAnimatedSwitchNavigator(
        {
            Entry,
            Home,
            Job,
            Graduate,
            Project,
            Certificate,
        },
        {
            initialRouteName: 'Entry',
            transition: transition(),
        }
    );

export default () => createAppContainer(navigation());

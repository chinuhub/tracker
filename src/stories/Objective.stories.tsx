import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Objective from '../Objective';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Objective Component',
    component: Objective,
};

export const simpleObjective = () => <Objective objectiveDescription='chinmay'/>;

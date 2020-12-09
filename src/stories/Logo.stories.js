import React from 'react';

import { Logo } from '../components/Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'blue_white',
};

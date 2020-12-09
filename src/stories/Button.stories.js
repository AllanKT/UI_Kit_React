import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  type: 'solid',
  onClick: () => {console.log("asdasds")},
  buttonStyle: 'primary',
  buttonSize: 'medium'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  type: 'solid',
  onClick: () => {console.log("asdasds")},
  buttonStyle: 'warning',
  buttonSize: 'medium'
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  type: 'solid',
  onClick: () => {console.log("asdasds")},
  buttonStyle: 'success',
  buttonSize: 'medium'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  type: 'solid',
  onClick: () => {console.log("asdasds")},
  buttonStyle: 'danger',
  buttonSize: 'medium'
};

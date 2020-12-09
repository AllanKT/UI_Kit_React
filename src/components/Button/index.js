import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

const SIZES = ['medium', 'small', 'large'];
const TYPES = ['solid', 'outline']
const STYLES = ['primary','warning','danger','success'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize:SIZES[0];
  const checkButtonType = TYPES.includes(type) ? type:TYPES[0];

  return (
    <Container
      styles={checkButtonStyle}
      size={checkButtonSize}
      onClick={onClick}
      type={checkButtonType}
    >
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(TYPES),
  onClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(STYLES),
  buttonSize: PropTypes.oneOf(SIZES),
};

Button.defaultProps = {
  children: null,
  type: 'solid',
  onClick: undefined,
  buttonStyle: 'primary',
  buttonSize: 'medium',
};

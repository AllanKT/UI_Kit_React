import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreText from 'react-show-more-text';// Vai ser usado no ver mais

import { Container } from './styles';

function Description(props) {
  const {
    title,
    description,
  } = props;
  return (
    <Container {...props}>
      <label>
        {`${title}: `}
      </label>
      <span>
        {description}
      </span>
    </Container>
  );
}

Description.propTypes = {
  vertical: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Description.defaultProps = {
  vertical: false,
};

export default Description;

import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/trulymais.png';
import logo_bluewhite from '../../assets/images/trulymais_bluewhite.png';
import logo_white from '../../assets/images/trulymais_white.png';
import logo_whiteblack from '../../assets/images/trulymais_whiteblack.png';

import { Container } from './style';

const TYPES = {
    'blue_white': logo_bluewhite,
    'blue_black': logo,
    'white': logo_white,
    'white_black': logo_whiteblack
}

export const Logo = ({ type }) => {
    const checkLogoType = Object.keys(TYPES).includes(type) ? TYPES[type]:TYPES['blue_white'];

    return (
        <Container
            src={checkLogoType}
            alt={type}
        />
    )
}

Logo.propTypes = {
    type: PropTypes.oneOf(Object.keys(TYPES))
};

Logo.defaultProps = {
    type: TYPES['blue_white'],
};

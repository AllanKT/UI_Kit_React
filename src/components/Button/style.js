import styled, { css } from 'styled-components';
import Nexa from '../../assets/fonts/Nexa-Regular.otf';

const colors = {
    white: '#fff',
    primary: '#8aaefe',
    warning: '#f6e631',
    success: '#5bb97d',
    danger: '#ED553B',
}

export const Container = styled.button`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    @font-face {
        font-family: "Nexa";
        src: url(${Nexa});
    }

    max-width: 100px;
    width: 100%;
    padding: 2px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    
    font-family: 'Nexa', 'Roboto', 'OpenSans', 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;

    transition: background-color 0.2s;
    background: white;
    color: black;
    cursor: pointer;

    background: ${
        (props) => props.type === 'solid'
        ? colors[props.styles]
        : colors.white
    };
    border: 2px solid ${
        (props) => props.type === 'solid'
        ? colors[props.styles]
        : colors.white
    };
    color: ${
        (props) => props.type === 'solid'
        ? colors.white
        : colors[props.styles]
    };

    &:hover {
        transform: translateY(-3px);
        background: ${
            (props) => props.type === 'solid'
            ? colors.white
            : colors[props.styles]
        };
        color: ${
            (props) => props.type === 'solid'
            ? colors[props.styles]
            : colors.white
        };
        border-color: ${
            (props) => props.type === 'solid'
            ? colors[props.styles]
            : colors.white
        };
    }
`
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Roboto';
  font-style: normal;
  text-align: center;
  color: #000000;
  font-size: 12px;

  label {
    font-weight: 700;
  }
    span {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    line-height: 28px;
    /* or 175% */
    text-align: center;
    width: 85px;
    white-space: nowrap !important; 
    overflow: hidden !important;
    text-overflow: ellipsis !important; 

    color: #000000;
  }

  ${(props) => props.vertical && css`
    flex-direction: column;
    justify-content: right;
    align-items: flex-start;
    label {
      font-weight: normal;
    }
    span {
      font-weight: 700;
    }
  `}
`;

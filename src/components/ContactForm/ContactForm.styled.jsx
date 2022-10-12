import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 10px 8px;

  font-size: 20px;
`;

export const Input = styled.input`
  margin-top: 4px;
  font-size: 16px;
  line-height: 24px;
`;

export const Button = styled.button`
  display: inline-flex;
  margin-left: 8px;

  padding: 4px 8px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #e2e2e2;
  }
`;

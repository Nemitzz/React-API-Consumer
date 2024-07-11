import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 6px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      transition: 300ms;
    }

    &:hover {
      border: 1px solid ${colors.primaryDarkColor};
      transition: 300ms;
    }
  }

`;

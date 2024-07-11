import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

  }

  input{
    font-size: 18px;
    height: 40px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid #ddd;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      transition: 500ms;

    }

    &:hover {
      border: 1px solid ${colors.primaryDarkColor};
      transition: 200ms;

    }
  }
`;

import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 3px;
  width: 1000px;
  margin: 20px auto;
`;
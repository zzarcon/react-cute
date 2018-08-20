import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
    color: #444;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 3px;
  width: 600px;
  margin: 20px auto;
`;

export const JsonWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 15px 30px;
  border-radius: 3px;

  h1 {
    margin: 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
  }
`;

export const JsonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  border-left: 3px solid #ccc;
  padding-left: 15px;
  color: #6a737d;
`

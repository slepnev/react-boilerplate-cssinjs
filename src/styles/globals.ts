import css from '@emotion/css/macro';
import { colors, fonts } from './constants';

const globals = css`
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    font-family: ${fonts.primary};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${colors.white};
    }
  }

  img {
    max-width: 100%;
    position: relative;
    vertical-align: middle;
  }

  table {
    width: 100%;
    font-size: 85%;
    border-collapse: collapse;
  }
  
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  
  ol, ul {
    margin: 0;
  }
`;

export default globals;

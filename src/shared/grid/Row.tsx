import React from 'react';
import RowAnt, { RowProps } from 'antd/es/grid/row';
import 'antd/es/grid/style/index.css';
import styled from '@emotion/styled/macro';

interface OwnProps extends RowProps {
  height?: string;
  nowrap?: boolean | number;
}

type Props = OwnProps;

const RowWrapper = styled(RowAnt)<Props>`
  ${p => p.height ? `height: ${p.height};` : null}
  ${p => p.nowrap ? `flex-flow: row nowrap;` : `flex-flow: row wrap;`}
`;

const Row: React.FC<Props> = (props) => {

  return (
    <RowWrapper {...props} nowrap={props.nowrap ? 1 : 0} />
  );
};

export default Row;

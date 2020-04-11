import React from 'react';
import Spin, { SpinProps } from 'antd/es/spin';
import 'antd/es/spin/style/index.css';
import styled from '@emotion/styled/macro';

const SpinWrapper = styled(Spin)<Props>`
`;

interface OwnProps extends SpinProps {
}

type Props = OwnProps;

const Spinner: React.FC<Props> = (props) => {

  return (
    <SpinWrapper {...props}/>
  );
};

export default Spinner;

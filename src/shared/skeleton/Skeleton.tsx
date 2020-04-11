import React from 'react';
import 'antd/es/spin/style/index.css';
import styled from '@emotion/styled/macro';
import SkeletonAnt, { SkeletonProps } from 'antd/es/skeleton';
import "antd/es/skeleton/style/index.css";

const SkeletonWrapper = styled(SkeletonAnt)<Props>`
  ${(props) => props.minHeight ? `min-height: ${props.minHeight}` : null}
`;

interface OwnProps extends SkeletonProps {
  minHeight?: string;
}

type Props = OwnProps;

const Skeleton: React.FC<Props> = (props) => {

  return (
    <SkeletonWrapper {...props} />
  );
};

export default Skeleton;

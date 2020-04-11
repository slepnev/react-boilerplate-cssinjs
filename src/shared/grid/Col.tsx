import React from 'react';
import ColAnt from 'antd/es/grid/col';
import styled from '@emotion/styled/macro';
import { mqMin } from '../../styles/constants';
import { Size } from '../../types/enums/styles';
import css from '@emotion/css/macro';

interface OwnProps {
  flex?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  grow?: number;
  shrink?: number;
  basis?: number;
}

type Props = OwnProps;

export const getFlex = (size: Size, flex: string) => css`
  ${mqMin(Size.xs)} {
    flex: ${flex};
  }
`;

const ColWrapper = styled(ColAnt)<Props>`
  ${p => typeof p.grow !== 'undefined' ? `flex-grow: ${p.grow};` : null}
  ${p => typeof p.shrink !== 'undefined' ? `flex-shrink: ${p.shrink};` : null}
  ${p => typeof p.basis !== 'undefined' ? `flex-basis: ${p.basis}px;` : null}
  ${p => typeof p.flex !== 'undefined' ? `flex: ${p.flex};` : null}
  ${p => typeof p.xs !== 'undefined' ? getFlex(Size.xs, p.xs) : null}
  ${p => typeof p.sm !== 'undefined' ? getFlex(Size.sm, p.sm) : null}
  ${p => typeof p.md !== 'undefined' ? getFlex(Size.md, p.md) : null}
  ${p => typeof p.lg !== 'undefined' ? getFlex(Size.lg, p.lg) : null}
  ${p => typeof p.xl !== 'undefined' ? getFlex(Size.xl, p.xl) : null}
  ${p => typeof p.xxl !== 'undefined' ? getFlex(Size.xxl, p.xxl) : null}
`;

const Col: React.FC<Props> = (props) => {

  return (
    <ColWrapper {...props} />
  );
};

export default Col;

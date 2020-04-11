import css from '@emotion/css/macro';
import { Size } from '../types/enums/styles';
import { TextAlign } from '../types/interfaces/styles';

export type AlignProps = {
  align?: TextAlign;
}

export type PaddingProps = {
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
}

export type MarginProps = {
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
}

export type WidthProps = {
  width?: string;
}

export type HeightProps = {
  height?: string;
}

export type WeightProps = {
  weight?: string;
}

export type SizeProps = {
  size?: Size;
}

export type ColorProps = {
  color?: string;
}

export type DisplayProps = {
  display?: string;
}

export type MenuWidthProps = {
  collapsed: boolean;
}

export type HelperProps = AlignProps & PaddingProps & MarginProps & HeightProps &
  WidthProps & WeightProps & SizeProps & ColorProps & DisplayProps;

export const getAlign = (props: HelperProps) => css`
  ${props.align ? `text-align: ${props.align}` : null};
`;

export const getDisplay = (props: HelperProps) => css`
  ${props.display ? `display: ${props.display}` : null};
`;

export const getPadding = (props: HelperProps) => css`
  ${props.pl !== undefined ? `padding-left: ${props.ml}px;` : null}
  ${props.pr !== undefined ? `padding-right: ${props.mr}px;` : null}
  ${props.pt !== undefined ? `padding-top: ${props.mt}px;` : null}
  ${props.pb !== undefined ? `padding-bottom: ${props.mb}px;` : null}
`;

export const getMargin = (props: HelperProps) => css`
  ${props.ml !== undefined ? `margin-left: ${props.ml}px;` : null}
  ${props.mr !== undefined ? `margin-right: ${props.mr}px;` : null}
  ${props.mt !== undefined ? `margin-top: ${props.mt}px;` : null}
  ${props.mb !== undefined ? `margin-bottom: ${props.mb}px;` : null}
`;

export const getHeight = (props: HelperProps) => css`
  ${props.height ? `height: ${props.height};` : null}
`;

export const getWidht = (props: HelperProps) => css`
  ${props.width ? `width: ${props.width};` : null}
`;

export const getWeight = (props: HelperProps) => css`
  ${props.weight ? `font-weight: ${props.weight};` : null}
`;

export const getColor = (props: HelperProps) => css`
  ${props.color ? `color: ${props.color};` : null}
`;

export const getHelpers = (props: HelperProps) => css`
  ${getAlign(props)}
  ${getPadding(props)}
  ${getMargin(props)}
  ${getHeight(props)}
  ${getWidht(props)}
  ${getWeight(props)}
  ${getColor(props)}
  ${getDisplay(props)}
`;



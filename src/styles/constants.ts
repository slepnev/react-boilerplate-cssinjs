import { Size } from '../types/enums/styles';

export const colors = {
  white: '#FFFFFF',
};

export const heights = {
};

export const widths = {
};

export const fonts = {
  primary: `'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, `
    + `Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
};

export const breakpoints = {
  [Size.xs]: 320,
  [Size.sm]: 576,
  [Size.md]: 768,
  [Size.lg]: 992,
  [Size.xl]: 1200,
  [Size.xxl]: 1600,
};

export const mqMin = Object.entries(breakpoints).reduce(
  (mq: any, [size, bp]) => ({...mq, [size]: `@media (min-width: ${bp}px)`}), {}
);

export const mqMax = Object.entries(breakpoints).reduce(
  (mq: any, [size, bp]) => ({...mq, [size]: `@media (max-width: ${bp}px)`}), {}
);

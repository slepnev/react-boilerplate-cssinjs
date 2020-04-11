import { Control, ValidationOptions } from 'react-hook-form';
import { Size } from '../enums/styles';
import { WidthProps } from '../../styles/helpers';

export interface FormControl extends WidthProps {
  control: Control;
  name: string;
  rules?: ValidationOptions;
  placeholder?: string;
  disable?: boolean;
  errors?: any;
  valid?: any;
  size?: Size;
}

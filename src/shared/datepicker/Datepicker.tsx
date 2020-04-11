import React from 'react';
import styled from '@emotion/styled/macro';
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

const DatepickerWrapper = styled.div`
`;

interface OwnProps extends ReactDatePickerProps {
}

type Props = OwnProps;

const Datepicker: React.FC<Props> = (props) => {

  return (
    <DatepickerWrapper>
      <ReactDatePicker
        locale="ru"
        dateFormat="dd.MM.yyyy"
        {...props}
      />
    </DatepickerWrapper>
  );
};

export default Datepicker;

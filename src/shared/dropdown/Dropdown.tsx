import React from 'react';
import DropdownAnt, { DropDownProps } from 'antd/es/dropdown';
import 'antd/es/dropdown/style/index.css';
import styled from '@emotion/styled/macro';


const DropdownWrapper = styled(DropdownAnt)<any>`
`;

interface OwnProps extends DropDownProps {
}

type Props = OwnProps;

const Dropdown: React.FC<Props> = (props) => {

  const handleClick = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <DropdownWrapper {...props} onClick={handleClick} />
  );
};

export default Dropdown;

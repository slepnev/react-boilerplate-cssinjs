import React from 'react';
import ModalAnt, { ModalFuncProps, ModalProps } from 'antd/es/modal';
import 'antd/es/modal/style/index.css';
import styled from '@emotion/styled/macro';
import { colors } from '../../styles/constants';

interface OwnProps extends ModalProps {
}

type Props = OwnProps;

const RowWrapper = styled(ModalAnt)<Props>`
  .ant-modal-content {
    background: ${colors.white};
    border-radius: 0;
  }
`;

const Modal: React.FC<Props> = (props) => {

  return (
    <RowWrapper {...props}>
      {props.children}
    </RowWrapper>
  );
};


export default Modal;

export const modalConfirm = (props: ModalFuncProps) => ModalAnt.confirm({
  icon: null,
  zIndex: 1060,
  title: 'Подтверждение',
  content: 'Вы уверены что хотите подтвердить?',
  okText: 'Да',
  cancelText: 'Отмена',
  ...props
});


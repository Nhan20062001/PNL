import { Button, ButtonProps } from 'antd';
import { ReactNode, FC } from 'react';
import styles from './style.module.scss';
import csx from 'classnames';

export enum ButtonType {
  DEFAULT = 'btn-default',
  PRIMARY = 'btn-primary',
}

interface Props extends ButtonProps {
  children: ReactNode;
  buttonType?: string;
  className?: string;
}

const CustomButton: FC<Props> = ({
  children,
  className,
  shape,
  buttonType = 'btn-default',
  ...rest
}: Props) => {
  return (
    <Button className={csx(styles[`${buttonType}`], `${className ?? ''}`)} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;

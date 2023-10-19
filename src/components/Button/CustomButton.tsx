import { Button, ButtonProps } from 'antd';
import { ReactNode, FC } from 'react';
import styles from './style.module.scss';
import csx from 'classnames';
import { ButtonType } from '@/config/constant';

interface Props extends ButtonProps {
  children: ReactNode;
  buttonType?: ButtonType;
  className?: string;
}

const CustomButton: FC<Props> = ({
  children,
  className,
  shape,
  buttonType = ButtonType.DEFAULT,
  ...rest
}: Props) => {
  return (
    <Button className={csx(styles[`${buttonType}`], `${className ?? ''}`)} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;

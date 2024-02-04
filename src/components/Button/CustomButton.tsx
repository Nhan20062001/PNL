import React, { ReactNode, FC } from 'react';
import { Button, ButtonProps } from 'antd';

import csx from 'classnames';
import { ButtonType } from '@/config/constant';
import styles from './style.module.scss';

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
}: Props) => (
  <Button className={csx(styles[`${buttonType}`], `${className ?? ''}`)} {...rest}>
    {children}
  </Button>
);

export default CustomButton;

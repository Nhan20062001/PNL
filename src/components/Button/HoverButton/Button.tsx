import styles from './button.module.scss';

// import { Button } from "antd";
import { ReactNode } from "react";

type IMainProps = {
    children: ReactNode;
  };
function Button({ children }: IMainProps) {
    return (
        // <Button className={styles['btn-hover']} type="primary" shape="round">
        //     <main>{children}</main>
        // </Button>
        <button 
            className={styles['btn-hover']}
        >
            <main>{children}</main>
        </button>
    );
}
export default Button;
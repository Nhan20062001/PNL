import { Button } from "antd";
import { ReactNode } from "react";
import styles from './button.module.scss';

type IMainProps = {
    children: ReactNode;
};

function ButtonSample({ children }: IMainProps) {
    return (
        <div className={styles['btn']}>
            <Button 
                shape="round"  
            >
                <main className={styles['btn-main']}>{children}</main>
            </Button>
        </div>
        
    );
}
export default ButtonSample;
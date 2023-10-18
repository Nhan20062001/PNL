import { Image } from 'antd';
import styles from './style.module.scss'
import UIUXIcon from '../../icons/UIUX.icons';
import React from 'react';
import LampIcon from '../../icons/Lamp.icons';
import AndroidIcon from '../../icons/Android.icons';
import WebsiteIcon from '../../icons/Website.icons';

type Types = {
    id?: string,
    icon?: React.ReactNode,
    title?: string,
    description?: string
}
const WhatWeDoCardPage = () => {

    const dataMock:Types[] = [
       {
        id: "1",
        icon: <LampIcon />,
        title: 'Cung cấp giả pháp, tư vấn chuyển đổi số',
        description: 'Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App'
       },
       {
        id: "2",
        icon: <AndroidIcon />,
        title: 'Mobile Application',
        description: 'Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App'
       },
       {
        id: "3",
        icon: <WebsiteIcon />,
        title: 'Web Application',
        description: 'Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App'
       },
       {
        id: "4",
        icon: <UIUXIcon />,
        title: 'UI/UX Design',
        description: 'Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App'
       }
    ]
    return (
        <div className='container'>

            <div className={styles['what-we-do']}>
                <div className={styles['image-left']} >
                    <Image 
                        className= {styles['image-style']}
                        src='/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg'
                        alt=''
                    />  
                </div>

                <div className={styles['content-right-container']}>
                    <h3 className={styles['content-right-title']}>What we do</h3>
                    <div className={styles['content-right-main-container']}>                 
                        {dataMock.map((item) => {
                            return (
                                <div className={styles['box-content']}>
                                    <div className={styles['icon-left']}>
                                        {item.icon}
                                    </div>
                                    <div className={styles['text-right']}>
                                        <span>{item.title}</span>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default WhatWeDoCardPage;
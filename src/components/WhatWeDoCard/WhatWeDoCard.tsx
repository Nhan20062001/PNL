import { Image } from 'antd';
import styles from './style.module.scss'
import UIUXIcon from '../icons/UIUX.icons';
import React from 'react';
import LampIcon from '../icons/Lamp.icons';
import AndroidIcon from '../icons/Android.icons';
import WebsiteIcon from '../icons/Website.icons';

type Types = {
    id?: string,
    icon?: React.ReactNode,
    title?: string,
    description?: string
}
const WhatWeDoCardPage = () => {

    const dataMock:Types[] = [
       {
        id: "a",
        icon: <></>
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
                        <div className={styles['box-content']}>
                            <div className={styles['icon-left']}>
                                <LampIcon />
                            </div>
                            <div className={styles['text-right']}>
                                <span>Cung cấp giả pháp, tư vấn chuyển đổi số</span>
                                <p>Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                            </div>
                        </div>
                        <div className={styles['box-content']}>
                            <div className={styles['icon-left']}>
                                <AndroidIcon />
                            </div>
                            <div className={styles['text-right']}>
                                <span>Mobile Application</span>
                                <p>Building mobile applications is never easy. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                            </div>
                        </div>
                        <div className={styles['box-content']}>
                            <div className={styles['icon-left']}>
                                <WebsiteIcon />
                            </div>
                            <div className={styles['text-right']}>
                                <span >Web Application</span>
                                <p>We can build any web applications you need. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                            </div>
                        </div>
                        <div className={styles['box-content']}>
                            <div className={styles['icon-left']}>
                                <UIUXIcon />
                            </div>
                            <div className={styles['text-right']}>
                                <span>UI/UX Design</span>
                                <p>All things are designed. A few things are designed well. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default WhatWeDoCardPage;
import { Image } from 'antd';
import './style.scss';
import LampIcon from '../icons/lamp.icons';
import AndroidIcon from '../icons/android.icons';
import WebsiteIcon from '../icons/website.icons';
import UIUXIcon from '../icons/UIUX.icons';

const WhatWeDoCardPage = () => {
    return (
        <div className='what-we-do container'>
            <div className='what-we-do image-left'>
                <Image 
                    className='image-style'
                    src='/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg'
                    alt=''
                />  
            </div>

            <div className='what-we-do content-right-container'>
                <h3 className='content-right-title'>What we do</h3>
                <div className='content-right-main-container'>
                    <div className='box-content'>
                        <div className='icon-left'>
                            <LampIcon />
                        </div>
                        <div className='text-right'>
                            <span>Cung cấp giả pháp, tư vấn chuyển đổi số</span>
                            <p>Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App ?Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                        </div>
                    </div>
                    <div className='box-content'>
                        <div className='content-right-main icon-left'>
                            <AndroidIcon />
                        </div>
                        <div className='text-right'>
                            <span>Mobile Application</span>
                            <p>Building mobile applications is never easy. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                        </div>
                    </div>
                    <div className='box-content'>
                        <div className='content-right-main icon-left'>
                            <WebsiteIcon />
                        </div>
                        <div className='text-right'>
                            <span >Web Application</span>
                            <p>We can build any web applications you need. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                        </div>
                    </div>
                    <div className='box-content'>
                        <div className='content-right-main icon-left'>
                            <UIUXIcon />
                        </div>
                        <div className='text-right'>
                            <span>UI/UX Design</span>
                            <p>All things are designed. A few things are designed well. Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App Building mobile applications is never easy.  P2P lending app ? Logistic App ? E-Commerce App </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhatWeDoCardPage;
import ButtonSample from '../Button/button';
import SendIcon from '../icons/send.icons';
import { Image } from 'antd';
import './style.scss';

const Intro = () => {
    return (
        <div className='intro-container'>
            <div className='intro-main'>
                <div className='intro-left'>
                    <h3>Cung cấp giải pháp chuyển đổi số</h3>
                    <div className='intro-detail'>
                        <h6>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </h6>
                    </div>
                    <ButtonSample>
                        <SendIcon />
                        <p>Contact to work</p>
                    </ButtonSample>
                </div>

                <div className='intro-right'>
                    <Image
                    className='content-image-right'
                    src='/images/header twiscode 1.png'
                    alt=''
                    width={656}
                    height={525}
                    />
                </div>
            </div>
      </div>
    );
}

export default Intro;
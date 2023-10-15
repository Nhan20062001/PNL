import SendIcon from '../icons/send.icons';
import { Button, Image } from 'antd';
import './style.scss';

const IntroPage = () => {
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
                    <Button
                        className="button"
                        shape='round'
                        onClick={() => {}}
                    >
                        <SendIcon />
                        Contact to work
                    </Button>
                    
                </div>

                <div className='intro-right'>
                    <Image
                    className='content-image-right'
                    src='/images/header twiscode 1.png'
                    alt=''
                    />
                </div>
            </div>
      </div>
    );
}

export default IntroPage;
import { Button, Form, Input } from 'antd';
import './style.scss';
import TextArea from 'antd/es/input/TextArea';
import SendIcon from '../icons/Send.icons';

const ContactCardComponent = () => {
    const [form] = Form.useForm();

    return (
        <>
            <div className="contact-card">
                <div className="contact-container contact-size">
                    <img
                        className="contact-container--image"
                        src="https://s3-alpha-sig.figma.com/img/69af/ef14/ec34ddc5ab531a19e86c9704fbeab279?Expires=1698019200&Signature=OC9m6AJYt~uXxRgDUOJ-2R6p6q5mDkWn2IYyWGwh87SctWwaeYJJAoF0~qYZaDVpXtIAFUZ3YBiZjawHVReKc~0c1A4AAKtJTE7Sw6~k6voMlSA8e2N9fZg~PWXjQDf0321WTWoUk6gMWcG0WjFmQ1n3vwZcpAhkRQZrHuIT7tpZQrI0QbINZDvdCda-MGLA68-t0vqMRJ5w16wht-o9THKHg9ZOAHEAaoCdSzbYLDcoekD7vb6BPZg9Vb002JXSBJlTXNSoDZ4vtQQXsixVIrEGQqvGy3uRiAJv3oO3HoFCQ-TrMU6vzKV~q3Rk8OnhvOOsGJXj5b2DfqGwCETKpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                    />
                    <div className="contact-container--opacity-layer contact-size"></div>
                </div>
                
                <div className='contact-card-content container'>
                    <h3>Contact</h3>
                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    <div className='contact-form'>
                        <Form className='form-container' form={form} name="validateOnly" layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Tên của bạn">
                                <Input className='input-name' placeholder='Nhập họ và tên' />
                            </Form.Item>
                            <Form.Item name="phone-number" label="Số điện thoại của bạn">
                                <Input className='input-phone-number' placeholder='Nhập số điện thoại'/>
                            </Form.Item>
                            <Form.Item name="email" label="Email của bạn">
                                <Input className='input-email' placeholder='Nhập email'/>
                            </Form.Item>
                            <Form.Item name="address" label="Địa chỉ của bạn">
                                <Input className='input-address' placeholder='Nhập địa chỉ của bạn'/>
                            </Form.Item>
                            <Form.Item name="note" label="Để lại lời nhắn của bạn">
                                <TextArea className='input-note' placeholder='Viết gì đó cho chúng tôi'/>
                            </Form.Item>
                            <Form.Item className='button'>
                                <Button
                                     className="button-contact"
                                     shape='round'
                                    //  type="primary"
                                    //  ghost={item.id !== courseSelected?.id}
                                    //  key={item.id}
                                     onClick={() => {
                                    //    setCourseSelected(item);
                                     }}
                                >
                                    <SendIcon/>
                                    Contact to work
                                </Button>
                            </Form.Item>
                        </Form>                
                    </div>
                </div>       
            </div>           
        </>        
    );
}
export default ContactCardComponent;
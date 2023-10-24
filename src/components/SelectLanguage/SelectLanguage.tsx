import { Select, Image } from 'antd';
import React from 'react';

const { Option } = Select;

const customImageStyle = {
  height: '22px',
  marginLeft: '1.5px',
  marginBottom: '1px',
};

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ value, onChange }) => {
  return (
    <Select
      suffixIcon={null}
      value={value}
      onChange={onChange}
      getPopupContainer={(trigger) => trigger.parentNode}
      style={{ textAlign: 'center' }}
    >
      <Option value="vn_VN">
        <Image preview={false} src="/images/logotiengviet.webp" alt="" style={customImageStyle} />
      </Option>
      <Option value="en_US">
        <Image preview={false} src="/images/logotienganh.png" alt="" style={customImageStyle} />
      </Option>
    </Select>
  );
};

export default SelectLanguage;

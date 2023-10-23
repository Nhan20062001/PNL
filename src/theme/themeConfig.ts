
import type { ThemeConfig } from 'antd';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
});
const theme: ThemeConfig = {
  token: {
    colorPrimary: '#5aaf32',
    fontFamily: poppins.style.fontFamily,
  },
  hashed: false,
};

export default theme;

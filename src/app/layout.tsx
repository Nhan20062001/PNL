import React from 'react';
import './globals.scss';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { appConfig } from '@/config/appConfig';
import { ReduxProvider } from '@/store/provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ConfigProvider, ThemeConfig } from 'antd';

const font = Poppins({ subsets: ['latin'], weight: '500' });

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#5aaf32',
    fontFamily: font.style.fontFamily,
  },
  hashed: false,
};

export const metadata: Metadata = {
  title: {
    default: appConfig.siteName!,
    template: `%s | ${appConfig.siteName}`,
  },
  description: appConfig.description,
  keywords: appConfig.keywords,
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: '/images/logo.png',
  },
  authors: [
    {
      url: appConfig.url,
      name: appConfig.title,
    },
  ],
  verification: {
    google: 'your-verification-id',
  },
  metadataBase: new URL(appConfig.url),
  openGraph: {
    images: `${appConfig.url}/favicon.ico`,
    type: 'article',
    title: appConfig.title,
    authors: appConfig.title,
    description: appConfig.description,
    locale: appConfig.locale,
    siteName: appConfig.siteName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Social open graph image */}
        <meta property="og:image" content="/images/social-open-graph.png" />
        {/* Twitter image */}
        <meta property="twitter:image" content="/images/twitter-image.png" />
      </head>
      <body className={font.className}>
        <ReduxProvider>
          <ConfigProvider theme={theme}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ConfigProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

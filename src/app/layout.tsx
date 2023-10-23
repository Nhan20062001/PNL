import React from 'react';
import './globals.scss';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { appConfig } from '@/config/appConfig';
import { ReduxProvider } from '@/store/provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: "500" } );

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
  keywords: 'thiết kế sata, sata, thiết kế',
  authors: [
    {
      url: appConfig.url,
      name: appConfig.title,
    },
  ],
  metadataBase: new URL(appConfig.url),
  openGraph: {
    images: `${appConfig.url}/favicon.ico`,
    type: 'article',
    title: appConfig.title,
    authors: appConfig.title,
    description: appConfig.description,
    locale: appConfig.locale,
    siteName: appConfig.site_name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Social open graph image */}
        <meta property="og:image" content="/images/social-open-graph.png" />
        {/* Twitter image */}
        <meta property="twitter:image" content="/images/twitter-image.png" />
      </head>
      <body className={poppins.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

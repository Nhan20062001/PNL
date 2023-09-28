import "./global.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ReduxProvider } from "../store/provider";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

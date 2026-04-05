import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const APP_NAME = "Stopwatch";
const TITLE = APP_NAME;
const DESCRIPTION = "A simple and precise stopwatch app.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stopwatch.vercel.app"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html
    className={geistSans.variable}
    data-scroll-behavior="smooth"
    lang="en-US"
  >
    <body>
      {/* This wrapper prevents a body overflow in mobile browsers. */}
      <div className="flex min-h-screen flex-col">
        {/* <Header /> */}
        <main className="grid flex-1 items-center">{children}</main>
        {/* <Footer /> */}
      </div>
    </body>
  </html>
);

export default RootLayout;

import type { Metadata } from 'next';
import '../styles/globals.css';
import { InterFont, UrbanistFont } from '@fonts/font';
import NavBar from '@components/navbar';
import { DEFAULT_METADATA } from '@constants/metadata';
import Script from 'next/script';
import Footer from '@components/footer';

// Show 404 for pages that are not generated statically
export const dynamicParams = false;

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        data-goatcounter="https://aamoldovanu.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
        async
        strategy="lazyOnload"
      />
      <body className={`${InterFont.className} ${UrbanistFont.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

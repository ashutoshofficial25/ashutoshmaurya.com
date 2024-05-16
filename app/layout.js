import Preloader from '@/layout/Preloader';
import '@css/custom.css';
import '@css/dark.css';
import '@css/main.css';
import '@css/modalboxes.css';
import '@css/plugins.css';
import { Mulish, Poppins } from 'next/font/google';
import './globals.css';
import State from '/context/context';
import Head from 'next/head';

/** google fonts */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins',
  display: 'swap',
});
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mulish',
  display: 'swap',
});

/** Font family */
const fontFamily = `${mulish.variable} ${poppins.variable}`;

export const metadata = {
  title: 'Ashutosh | FullStack Developer',
  description: 'A FullStack (MERN) Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E88QKKYNJ6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E88QKKYNJ6');
            `,
          }}
        />
      </Head>

      <body className={fontFamily}>
        <Preloader />
        <State>{children}</State>
      </body>
    </html>
  );
}

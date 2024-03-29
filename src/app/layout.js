"use client";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Head from "next/head";
// import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Student Instructor ",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang='en'>
//       <head>
//         <link
//           rel='stylesheet'
//           href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
//           integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
//           crossorigin='anonymous'
//           referrerpolicy='no-referrer'
//         />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
// layout.js

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
// import { Inter } from "next/font/google";

// Move the font loader outside of the component function
// const inter = Inter({ subsets: ["latin"] });
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
// export const metadata = {
//   title: "Student Instructor",
//   description: "Generated by create next app",
// };
// import store from "../features/store";
import StoreProvider from "../services/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* Include other necessary head elements */}
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/npm/apexcharts@3.29.0/dist/apexcharts.min.css'
        />
        <ColorSchemeScript />
      </head>

      <body>
        <StoreProvider>
          <MantineProvider>{children}</MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

"use client";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";

import StoreProvider from "../services/Provider";
import CallTheState from "../services/CallTheState";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
          <CallTheState>
            <MantineProvider>{children}</MantineProvider>
          </CallTheState>
        </StoreProvider>
      </body>
    </html>
  );
}

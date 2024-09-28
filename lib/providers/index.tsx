import Head from "next/head";
import AuthProvider from "./clerk";
import ReactQueryProvider from "./reactQuery";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <link
          rel="icon"
          href="/assets/images/favicons/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="/assets/images/favicons/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/assets/images/favicons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/assets/images/favicons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
        <body
          style={{
            backgroundColor: "#FCFCFC",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
    </AuthProvider>
  );
}

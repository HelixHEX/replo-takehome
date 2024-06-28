import AuthProvider from "./clerk";
import ReactQueryProvider from "./reactQuery";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-row`}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
    </AuthProvider>
  );
}

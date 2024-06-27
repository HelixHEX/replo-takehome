import AuthProvider from "./clerk";
import ReactQueryProvider from "./reactQuery";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </AuthProvider>
  );
}

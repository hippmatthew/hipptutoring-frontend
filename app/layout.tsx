import Navbar from "../components/navbar/navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar auth={false} />
        {children}
      </body>
    </html>
  );
}

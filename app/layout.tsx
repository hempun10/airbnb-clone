import { ClientOnly, Footer, Modal, Navbar, RegisterModal } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./providers";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

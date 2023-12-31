import {
  ClientOnly,
  Footer,
  LoginModal,
  Modal,
  Navbar,
  RegisterModal,
} from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./providers";
import { getCurrentUser } from "./actions";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

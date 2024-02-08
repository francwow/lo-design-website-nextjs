import Provider from "@/components/Provider";
import type { Metadata } from "next";
import { Inter, Montserrat, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/normalize.css";
import Languages from "@/components/Languages";
import MainNav from "@/components/MainNav";
import MenuBtn from "@/components/MenuBtn";
import NavOverlay from "@/components/NavOverlay";
import Header from "@/components/Header";
import FooterComponent from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "LO design",
  description:
    "LO design S.A.S. es una pyme con única sede ubicada en Cali, conformada por un equipo de profesionales con experticia en el manejo de vidrio templado, acero inoxidable y aluminio arquitectónico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${materialSymbols.variable}`} lang="es">
      <Provider>
        <body
          className={`${inter.variable} ${montserrat.variable} ${oswald.variable}`}
        >
          <Whatsapp />
          <NavOverlay />
          <Header />
          <MainNav />
          <main className="main-wrapper">{children}</main>
          <FooterComponent />
        </body>
      </Provider>
    </html>
  );
}

import market from "@/public/destacados/market.webp";
import ventolini from "@/public/destacados/ventolini.webp";
import airmatic from "@/public/destacados/airmatic.webp";
import cantina from "@/public/destacados/cantina.webp";
import centronet from "@/public/destacados/centronet.webp";
import { StaticImageData } from "next/image";

type Destacados = {
  img: StaticImageData;
  alt: string;
  link: string;
  headingES: string;
  headingEN: string;
  pES: string;
  pEN: string;
  expand: number;
};

export const destacados: Destacados[] = [
  {
    img: market,
    alt: "trabajo en vidrio realizado para The Market",
    link: "https://youtu.be/GPJe3j-Likw?si=mtEfKMU3KqC0ugkM",
    headingES: "THE MARKET",
    headingEN: "THE MARKET",
    pES: "Cerramientos y puertas en vidrio templado y acero inoxidable para The Market.",
    pEN: "Enclosures and doors in tempered glass and stainless steel for The Market.",
    expand: 1,
  },
  {
    img: ventolini,
    alt: "trabajo en vidrio realizado para Ventolini",
    link: "https://youtu.be/G98gqKZy3Q8?si=7wtgOStpBkrk3BTC",
    headingES: "VENTOLINI",
    headingEN: "VENTOLINI",
    pES: "Cerramientos y puertas en vidrio templado y acero inoxidable para Ventolini.",
    pEN: "Enclosures and doors in tempered glass and stainless steel for Ventolini.",
    expand: 2,
  },
  {
    img: airmatic,
    alt: "trabajo en vidrio realizado para Airmatic",
    link: "https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5",
    headingES: "AIRMATIC",
    headingEN: "AIRMATIC",
    pES: "Cerramientos y puertas en vidrio templado y acero inoxidable para AIRMATIC.",
    pEN: "Enclosures and doors in tempered glass and stainless steel for AIRMATIC.",
    expand: 3,
  },
  {
    img: cantina,
    alt: "trabajo en vidrio realizado para La Cantina de Chente",
    link: "https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5",
    headingES: "LA CANTINA DE CHENTE",
    headingEN: "LA CANTINA DE CHENTE",
    pES: "Cerramientos y puertas en vidrio templado y acero inoxidable para La Cantina de Chente.",
    pEN: "Enclosures and doors in tempered glass and stainless steel for La Cantina de Chente.",
    expand: 4,
  },
  {
    img: centronet,
    alt: "trabajo en vidrio realizado para Centronet",
    link: "https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5",
    headingES: "CENTRONET",
    headingEN: "CENTRONET",
    pES: "Cerramientos y puertas en vidrio templado y acero inoxidable para Centronet.",
    pEN: "Enclosures and doors in tempered glass and stainless steel for The Centronet.",
    expand: 5,
  },
];

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair-display", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Encantarte | Papelaria personalizada",
  description: "Papelaria personalizada criada com carinho para transformar momentos em lembranças inesquecíveis.",
  keywords: ["papelaria personalizada", "agendas personalizadas", "kits para festas", "convites", "lembrancinhas"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR" className={`${dmSans.variable} ${playfairDisplay.variable}`}><body>{children}</body></html>;
}

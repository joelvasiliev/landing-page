import 'aos/dist/aos.css';
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EExclusivepay - A maneira inteligente de maximizar pagamentos para o seu negócio digital",
  description: "A maneira inteligente de maximizar pagamentos para o seu negócio digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

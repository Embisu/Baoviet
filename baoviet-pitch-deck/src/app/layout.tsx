import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "CHÈO DI SẢN | Bảo Việt Nhân Thọ",
  description: "Giải Vô Địch Đua Ghe Truyền Thống Cố Đô Huế 2026 - Tranh Cúp Bảo Việt Nhân Thọ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-deep-river text-off-white`}
      >
        <SmoothScroll>
          <div 
            className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

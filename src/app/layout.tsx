import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import { ViewProvider } from "@/components/ViewContext";
import "./globals.css";

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likha",
  description: "Art by independent artists",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>
      </body>
    </html>
  );
}

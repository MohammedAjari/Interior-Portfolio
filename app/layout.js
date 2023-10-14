import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Shaarda Interiors",
    template: '%s | Shaarda Interiors  '
  },
  description: ' %s |  We Provide One Stop Solutions for All Your Interior Needs.',
  keywords: [
    'Interior Design', 
    'Design', 
    'Designing', 
    'Interior Decor',
    'Home Renovation',
    'Office Design',
    'Residential Interiors',
    'Commercial Spaces',
    'Modern Design',
    'Traditional Interior',
    'Sustainable Design',
    'Color Schemes',
    'Furniture Selection',
    'Space Planning'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

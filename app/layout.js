// layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AfricaHPO",
  description:
    "Africa Health Promotion Organization is an NGO dedicated to empowering individuals and communities to improve their health. At Africa HPO, we believe everyone at all ages has the potential to achieve their life aspirations. We're therefore poised to help address barriers that limit people in the pursuit of their life purposes. We are here to reach out to society through effective people engagement, health literacy capacity building, and community development. Every encounter with us leaves our beneficiaries with lovely memories for life.",
  logo: "../public/Africa HPO.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

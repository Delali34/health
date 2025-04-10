// ClientLayout.jsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && (
        <div className="z-[9999]">
          <Navbar />
        </div>
      )}

      {children}

      {!isAdminRoute && <Footer />}
    </>
  );
}

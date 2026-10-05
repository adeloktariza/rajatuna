import type { Metadata } from "next";
import "./globals.css";
import "admin-lte/dist/css/adminlte.min.css";

export const metadata: Metadata = {
  title: "Admin Rajatuna",
  description: "Admin Rajatuna - Dashboard Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="hold-transition sidebar-mini layout-fixed">
        {children}
      </body>
    </html>
  );
}

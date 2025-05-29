import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js course dashboard, built with App Router',
  metadataBase: new URL('https://pse-frontend-nextjs-dashboard.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

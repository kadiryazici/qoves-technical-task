import "./globals.css";

import { fontClassName } from "./fonts"
import { cn } from "@/utils/cn";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("bg-bg-base",fontClassName)}>
      <body>{children}</body>
    </html>
  );
}

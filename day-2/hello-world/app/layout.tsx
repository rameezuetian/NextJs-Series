import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
  description: "Welcome to the Hello World app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nouveau Projet',
  description: 'Généré par App Prototyper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

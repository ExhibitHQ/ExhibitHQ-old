export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>ExhibitHQ Site</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
